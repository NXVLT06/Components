const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;
const SAVE_DIR = 'C:\\Users\\Gokulnatraj\\Documents\\BILL';

// Ensure the target save directory exists
try {
  if (!fs.existsSync(SAVE_DIR)) {
    fs.mkdirSync(SAVE_DIR, { recursive: true });
    console.log(`Created BILL directory at: ${SAVE_DIR}`);
  }
} catch (e) {
  console.warn(`Could not verify ${SAVE_DIR}:`, e.message);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // API: Health status check
  if (req.method === 'GET' && pathname === '/api/status') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'online',
      saveDirectory: SAVE_DIR,
      exists: fs.existsSync(SAVE_DIR)
    }));
    return;
  }

  // API: Save Bill directly to C:\Users\Gokulnatraj\Documents\BILL
  if (req.method === 'POST' && pathname === '/api/save-bill') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      // Cap at 50MB to prevent memory issues
      if (body.length > 50 * 1024 * 1024) {
        req.destroy();
      }
    });

    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const filename = (payload.filename || `INV-${Date.now()}.pdf`).replace(/[^a-zA-Z0-9_\-\.]/g, '_');
        const targetPath = path.join(SAVE_DIR, filename);

        if (!fs.existsSync(SAVE_DIR)) {
          fs.mkdirSync(SAVE_DIR, { recursive: true });
        }

        if (payload.pdfBase64) {
          // Remove potential data URI prefix
          const base64Data = payload.pdfBase64.replace(/^data:application\/pdf;base64,/, '').replace(/^data:image\/[^;]+;base64,/, '');
          const buffer = Buffer.from(base64Data, 'base64');
          fs.writeFileSync(targetPath, buffer);
          console.log(`[SAVED] Bill written directly to: ${targetPath}`);
        } else if (payload.htmlContent) {
          const htmlFilename = filename.replace(/\.pdf$/i, '.html');
          const htmlPath = path.join(SAVE_DIR, htmlFilename);
          fs.writeFileSync(htmlPath, payload.htmlContent, 'utf8');
          console.log(`[SAVED] HTML Bill written to: ${htmlPath}`);
        }

        // Also save invoice data record for auditing
        if (payload.invoiceData) {
          const jsonFilename = filename.replace(/\.(pdf|html)$/i, '.json');
          const jsonPath = path.join(SAVE_DIR, jsonFilename);
          fs.writeFileSync(jsonPath, JSON.stringify(payload.invoiceData, null, 2), 'utf8');
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          savedPath: targetPath,
          directory: SAVE_DIR,
          filename: filename
        }));
      } catch (err) {
        console.error('Save bill error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Static File Serving
  let reqPath = pathname === '/' ? '/index.html' : pathname;
  // Security check: prevent directory traversal
  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`Invoice Builder Studio Server Running at: http://localhost:${PORT}`);
  console.log(`Target Bill Directory: ${SAVE_DIR}`);
  console.log(`=======================================================`);
});
