/* ==========================================================================
   A4 INVOICE GENERATOR - LOGIC ENGINE WITH LABOUR & WOODEN BASE (NO GST / NO TAX)
   ========================================================================== */

// Initial Catalog dataset parsed from PRICE.xlsx
const INITIAL_CATALOG = [
  { id: 1, name: "Arduino uno", price: 250, withGst: 295, mrp: 339 },
  { id: 2, name: "Arduino Nano", price: 190, withGst: 224, mrp: 258 },
  { id: 3, name: "ESP32", price: 350, withGst: 413, mrp: 475 },
  { id: 4, name: "ESP8266", price: 250, withGst: 295, mrp: 339 },
  { id: 5, name: "DHT11", price: 60, withGst: 70.8, mrp: 81 },
  { id: 6, name: "DH22", price: 100, withGst: 118, mrp: 136 },
  { id: 7, name: "IR SENSOR", price: 30, withGst: 35.4, mrp: 41 },
  { id: 8, name: "ULTRASONIC SENSOR", price: 60, withGst: 70.8, mrp: 81 },
  { id: 9, name: "METAL SENSOR", price: 190, withGst: 224.2, mrp: 258 },
  { id: 10, name: "SOIL MOISOR SENSOR (WET)", price: 65, withGst: 76.7, mrp: 88 },
  { id: 11, name: "LCD 16X2", price: 180, withGst: 212.4, mrp: 244 },
  { id: 12, name: "OLED 0.96", price: 155, withGst: 182.9, mrp: 210 },
  { id: 13, name: "PUSHBUTTON", price: 10, withGst: 11.8, mrp: 14 },
  { id: 14, name: "JUMPER WIRE", price: 60, withGst: 70.8, mrp: 82 },
  { id: 15, name: "SERVO MOTOR SG90", price: 75, withGst: 88.5, mrp: 102 },
  { id: 16, name: "BREADBOARD", price: 60, withGst: 70.8, mrp: 81 },
  { id: 17, name: "BUZZER MODULE", price: 30, withGst: 35.4, mrp: 41 },
  { id: 18, name: "5V RELAY MODULE", price: 30, withGst: 35.4, mrp: 41 },
  { id: 19, name: "MIX RESISTOR BOX", price: 40, withGst: 47.2, mrp: 55 },
  { id: 20, name: "BUZZER 12MM", price: 10, withGst: 11.8, mrp: 14 },
  { id: 21, name: "TDS SENSOR", price: 500, withGst: 590, mrp: 678 },
  { id: 22, name: "PH SENSOR", price: 1200, withGst: 1416, mrp: 1628 },
  { id: 23, name: "COLOUR SENSOR YCS3200", price: 350, withGst: 413, mrp: 475 },
  { id: 24, name: "TEMP SENSOR LM35", price: 70, withGst: 82, mrp: 95 },
  { id: 25, name: "GPS MODULE NEO 6M", price: 250, withGst: 295, mrp: 339 },
  { id: 26, name: "MPU6050", price: 160, withGst: 188.8, mrp: 217 },
  { id: 27, name: "MAX30102 PULSE", price: 100, withGst: 118, mrp: 136 },
  { id: 28, name: "SIM800L", price: 260, withGst: 306.8, mrp: 353 },
  { id: 29, name: "MLX90614 TEMP SENSOR", price: 730, withGst: 861.4, mrp: 991 },
  { id: 30, name: "WATER MOTOR", price: 50, withGst: 59, mrp: 68 },
  { id: 31, name: "ACS712 20A CURRENT SENSOR", price: 75, withGst: 88, mrp: 102 },
  { id: 32, name: "KEYPAD 4X4", price: 50, withGst: 59, mrp: 68 },
  { id: 33, name: "TRANSISTOR IRFFZ44NPBF", price: 20, withGst: 23, mrp: 27 },
  { id: 34, name: "MQ2 SMOKE/GAS SENSOR", price: 250, withGst: 295, mrp: 339 },
  { id: 35, name: "RFID RC522", price: 85, withGst: 100.3, mrp: 116 },
  { id: 36, name: "DC VOLTMETER VOLT SENSOR", price: 22, withGst: 25.96, mrp: 30 },
  { id: 37, name: "LORA RA02 (SX1278)", price: 300, withGst: 354, mrp: 407 },
  { id: 38, name: "SMA150MM", price: 40, withGst: 47.2, mrp: 55 },
  { id: 39, name: "3.3V 5V LOGIC LEVEL CONVERTOR", price: 22, withGst: 25.96, mrp: 30 },
  { id: 40, name: "ANTENNA", price: 40, withGst: 47.2, mrp: 55 },
  { id: 41, name: "ARDUINO LEONARDO", price: 415, withGst: 489.7, mrp: 563 },
  { id: 42, name: "DF PLAYER MINI", price: 299, withGst: 352.82, mrp: 406 }
];

// Application State
let currentCatalog = [...INITIAL_CATALOG];
let invoiceItems = [
  { id: 1, description: "Arduino uno", qty: 1, unitPrice: 250 },
  { id: 3, description: "ESP32", qty: 2, unitPrice: 350 },
  { id: 5, description: "DHT11", qty: 1, unitPrice: 60 }
];

let savedInvoices = loadHistoryFromStorage();
let invoiceCounter = getNextInvoiceCounter();
let discountMode = 'flat'; // 'flat' | 'percent'

// DOM Elements
const inputInvoiceNo = document.getElementById('inputInvoiceNo');
const inputInvoiceDate = document.getElementById('inputInvoiceDate');

const inputCustName = document.getElementById('inputCustName');
const inputCustAddress = document.getElementById('inputCustAddress');
const inputCustPhone = document.getElementById('inputCustPhone');
const inputCustEmail = document.getElementById('inputCustEmail');

const inputSellerName = document.getElementById('inputSellerName');
const inputSellerAddress = document.getElementById('inputSellerAddress');
const inputSellerPhone = document.getElementById('inputSellerPhone');
const inputSellerEmail = document.getElementById('inputSellerEmail');

const catalogSearch = document.getElementById('catalogSearch');
const catalogListContainer = document.getElementById('catalogListContainer');
const catalogCount = document.getElementById('catalogCount');
const fileExcelUpload = document.getElementById('fileExcelUpload');
const btnSyncExcel = document.getElementById('btnSyncExcel');
const liveSyncStatus = document.getElementById('liveSyncStatus');

const customDesc = document.getElementById('customDesc');
const customQty = document.getElementById('customQty');
const customPrice = document.getElementById('customPrice');
const btnAddCustomItem = document.getElementById('btnAddCustomItem');

const chkEnableDiscount = document.getElementById('chkEnableDiscount');
const groupDiscountControls = document.getElementById('groupDiscountControls');
const btnDiscountModeFlat = document.getElementById('btnDiscountModeFlat');
const btnDiscountModePercent = document.getElementById('btnDiscountModePercent');
const inputDiscount = document.getElementById('inputDiscount');
const lblDiscountInput = document.getElementById('lblDiscountInput');
const discountUnitBadge = document.getElementById('discountUnitBadge');
const discountCalcHint = document.getElementById('discountCalcHint');
const btnPresetClear = document.getElementById('btnPresetClear');

const chkEnableLabour = document.getElementById('chkEnableLabour');
const inputLabourCharge = document.getElementById('inputLabourCharge');
const groupLabourInput = document.getElementById('groupLabourInput');

const chkEnableWooden = document.getElementById('chkEnableWooden');
const inputWoodenBaseCharge = document.getElementById('inputWoodenBaseCharge');
const groupWoodenInput = document.getElementById('groupWoodenInput');

const btnClearAll = document.getElementById('btnClearAll');
const btnSaveInvoice = document.getElementById('btnSaveInvoice');
const btnSaveNew = document.getElementById('btnSaveNew');

const btnDownloadPdf = document.getElementById('btnDownloadPdf');
const btnPrint = document.getElementById('btnPrint');
const btnQuickPdf = document.getElementById('btnQuickPdf');
const btnQuickPrint = document.getElementById('btnQuickPrint');

const historyListContainer = document.getElementById('historyListContainer');
const historyCount = document.getElementById('historyCount');

// Mobile & Zoom View Elements
const appLayout = document.querySelector('.app-layout');
const tabEdit = document.getElementById('tabEdit');
const tabPreview = document.getElementById('tabPreview');
const mobileItemBadge = document.getElementById('mobileItemBadge');
const btnMobileSave = document.getElementById('btnMobileSave');
const btnMobilePrint = document.getElementById('btnMobilePrint');

const btnViewBill = document.getElementById('btnViewBill');
const viewBillBadge = document.getElementById('viewBillBadge');
const fabToggleView = document.getElementById('fabToggleView');
const fabItemBadge = document.getElementById('fabItemBadge');

const btnZoomIn = document.getElementById('btnZoomIn');
const btnZoomOut = document.getElementById('btnZoomOut');
const btnZoomReset = document.getElementById('btnZoomReset');
const zoomLevelText = document.getElementById('zoomLevelText');
const a4Wrapper = document.getElementById('a4Wrapper');
const a4ScaleContainer = document.getElementById('a4ScaleContainer');

let currentZoomScale = 1.0;
let isAutoFitZoom = true;

// Preview View Elements
const viewInvoiceNo = document.getElementById('viewInvoiceNo');
const viewInvoiceDate = document.getElementById('viewInvoiceDate');

const viewSellerName = document.getElementById('viewSellerName');
const viewSellerNameSub = document.getElementById('viewSellerNameSub');
const viewSellerAddress = document.getElementById('viewSellerAddress');
const viewSellerPhone = document.getElementById('viewSellerPhone');
const viewSellerEmail = document.getElementById('viewSellerEmail');

const viewCustName = document.getElementById('viewCustName');
const viewCustAddress = document.getElementById('viewCustAddress');
const viewCustPhone = document.getElementById('viewCustPhone');
const viewCustEmail = document.getElementById('viewCustEmail');

const invoiceTableBody = document.getElementById('invoiceTableBody');
const viewSubtotal = document.getElementById('viewSubtotal');
const rowDiscount = document.getElementById('rowDiscount');
const viewDiscount = document.getElementById('viewDiscount');
const viewDiscountTag = document.getElementById('viewDiscountTag');
const viewTaxable = document.getElementById('viewTaxable');
const viewGst = document.getElementById('viewGst');
const viewServiceTax = document.getElementById('viewServiceTax');

const rowLabour = document.getElementById('rowLabour');
const viewLabourCharge = document.getElementById('viewLabourCharge');

const rowWoodenBase = document.getElementById('rowWoodenBase');
const viewWoodenBaseCharge = document.getElementById('viewWoodenBaseCharge');
const viewGrandTotal = document.getElementById('viewGrandTotal');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  inputInvoiceDate.value = today;

  inputInvoiceNo.value = formatInvoiceNo(invoiceCounter);

  if (!inputSellerAddress.value) {
    inputSellerAddress.value = "123 Tech Park Avenue, Innovation District\nChennai, Tamil Nadu, 600001";
  }
  inputSellerPhone.value = "+91 934515852";
  inputSellerEmail.value = "gokulnatraj06@gmail.com";

  inputCustName.value = "Tech Solutions Pvt Ltd";
  inputCustAddress.value = "45 Cyber Towers, IT Corridor,\nBengaluru, Karnataka - 560100";
  inputCustPhone.value = "+91 91234 56789";
  inputCustEmail.value = "contact@techsolutions.com";

  bindEvents();
  setupMobileViewsAndZoom();
  renderCatalog();
  renderHistoryUI();
  renderInvoice();
  
  // Auto-Sync Live PRICE.xlsx on load
  loadLiveExcelFile(false);
});

// Event Bindings
function bindEvents() {
  [
    inputInvoiceNo, inputInvoiceDate,
    inputCustName, inputCustAddress, inputCustPhone, inputCustEmail,
    inputSellerName, inputSellerAddress, inputSellerPhone, inputSellerEmail,
    inputDiscount, inputLabourCharge, inputWoodenBaseCharge
  ].forEach(input => {
    input.addEventListener('input', updateInvoiceViews);
  });

  [chkEnableDiscount, chkEnableLabour, chkEnableWooden].forEach(chk => {
    if (chk) {
      chk.addEventListener('change', () => {
        calculateTotals();
      });
    }
  });

  // Discount Mode Switchers (Flat vs Percent)
  if (btnDiscountModeFlat && btnDiscountModePercent) {
    btnDiscountModeFlat.addEventListener('click', () => {
      setDiscountMode('flat');
    });
    btnDiscountModePercent.addEventListener('click', () => {
      setDiscountMode('percent');
    });
  }

  // Preset Discount Buttons
  document.querySelectorAll('.btn-preset[data-mode]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetMode = e.currentTarget.dataset.mode;
      const targetVal = parseFloat(e.currentTarget.dataset.val) || 0;
      
      // Update UI preset active state
      document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      setDiscountMode(targetMode, targetVal);
    });
  });

  // Clear / Reset Discount Preset
  if (btnPresetClear) {
    btnPresetClear.addEventListener('click', () => {
      document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
      if (inputDiscount) inputDiscount.value = 0;
      calculateTotals();
    });
  }

  catalogSearch.addEventListener('input', renderCatalog);
  btnAddCustomItem.addEventListener('click', handleAddCustomItem);

  btnClearAll.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all items from the bill?")) {
      invoiceItems = [];
      renderInvoice();
    }
  });

  if (btnSaveInvoice) {
    btnSaveInvoice.addEventListener('click', () => saveAndStartNewInvoice(true));
  }
  if (btnSaveNew) {
    btnSaveNew.addEventListener('click', () => saveAndStartNewInvoice(true));
  }
  fileExcelUpload.addEventListener('change', handleExcelUpload);
  if (btnSyncExcel) {
    btnSyncExcel.addEventListener('click', () => loadLiveExcelFile(true));
  }

  btnDownloadPdf.addEventListener('click', downloadPDF);
  btnQuickPdf.addEventListener('click', downloadPDF);
  btnPrint.addEventListener('click', printInvoice);
  btnQuickPrint.addEventListener('click', printInvoice);
}

// Set Discount Mode (flat vs percent) & Optionally set value
function setDiscountMode(mode, value = null) {
  discountMode = mode;
  if (value !== null && inputDiscount) {
    inputDiscount.value = value;
  }

  if (mode === 'percent') {
    if (btnDiscountModePercent) btnDiscountModePercent.classList.add('active');
    if (btnDiscountModeFlat) btnDiscountModeFlat.classList.remove('active');
    if (lblDiscountInput) lblDiscountInput.textContent = 'Discount Value (%):';
    if (discountUnitBadge) discountUnitBadge.textContent = '%';
  } else {
    if (btnDiscountModeFlat) btnDiscountModeFlat.classList.add('active');
    if (btnDiscountModePercent) btnDiscountModePercent.classList.remove('active');
    if (lblDiscountInput) lblDiscountInput.textContent = 'Discount Value (₹):';
    if (discountUnitBadge) discountUnitBadge.textContent = '₹';
  }

  calculateTotals();
}

// History & Counter Logic
function loadHistoryFromStorage() {
  try {
    const data = localStorage.getItem('invoice_history');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveHistoryToStorage() {
  try {
    localStorage.setItem('invoice_history', JSON.stringify(savedInvoices));
  } catch (e) {
    console.error("LocalStorage save error", e);
  }
}

function getNextInvoiceCounter() {
  let maxSeq = 1;
  savedInvoices.forEach(inv => {
    if (inv.invoiceNo && inv.invoiceNo.includes('INV-2026-')) {
      const parts = inv.invoiceNo.split('INV-2026-');
      const num = parseInt(parts[1]);
      if (!isNaN(num) && num >= maxSeq) {
        maxSeq = num + 1;
      }
    }
  });
  return maxSeq;
}

function formatInvoiceNo(seq) {
  const padded = String(seq).padStart(3, '0');
  return `INV-2026-${padded}`;
}

// Save Current Bill to Localhost Storage & History List
function saveCurrentInvoiceToHistory(showNotification = true) {
  if (invoiceItems.length === 0) {
    if (showNotification) {
      alert("Cannot save an empty bill. Please add components first!");
    }
    return null;
  }

  const totals = calculateTotals();
  const invNo = inputInvoiceNo.value || formatInvoiceNo(invoiceCounter);

  const newInvoiceRecord = {
    id: 'INV_' + Date.now(),
    invoiceNo: invNo,
    date: inputInvoiceDate.value,
    customerName: inputCustName.value || 'Unnamed Customer',
    customerPhone: inputCustPhone.value,
    customerEmail: inputCustEmail.value,
    customerAddress: inputCustAddress.value,
    items: JSON.parse(JSON.stringify(invoiceItems)),
    discountInputVal: parseFloat(inputDiscount.value) || 0,
    discountMode: discountMode || 'flat',
    discountEnabled: (chkEnableDiscount ? chkEnableDiscount.checked : true),
    discount: totals.discount,
    labourCharge: (chkEnableLabour && chkEnableLabour.checked) ? (parseFloat(inputLabourCharge.value) || 0) : 0,
    woodenBaseCharge: (chkEnableWooden && chkEnableWooden.checked) ? (parseFloat(inputWoodenBaseCharge.value) || 0) : 0,
    subtotal: totals.subtotal,
    taxable: totals.taxable,
    gst: totals.gst,
    serviceTax: totals.serviceTax,
    grandTotal: totals.grandTotal,
    createdAt: new Date().toISOString()
  };

  // Replace existing record if saving the same invoice number
  savedInvoices = savedInvoices.filter(inv => inv.invoiceNo !== invNo);
  savedInvoices.unshift(newInvoiceRecord);
  saveHistoryToStorage();
  renderHistoryUI();

  if (showNotification) {
    alert(`Invoice ${invNo} saved successfully to Local Storage History!`);
  }
  return newInvoiceRecord;
}

// Save Current Bill to History, Clear Form & Auto-Change Invoice Number for New Bill
function saveAndStartNewInvoice(showNotification = true) {
  const saved = saveCurrentInvoiceToHistory(showNotification);
  if (!saved) return;

  // Automatically calculate next invoice sequence based on saved history
  invoiceCounter = getNextInvoiceCounter();
  inputInvoiceNo.value = formatInvoiceNo(invoiceCounter);

  // Clear form for fresh new invoice
  invoiceItems = [];
  inputCustName.value = '';
  inputCustPhone.value = '';
  inputCustEmail.value = '';
  inputCustAddress.value = '';
  inputDiscount.value = 0;
  if (inputLabourCharge) inputLabourCharge.value = 150;
  if (inputWoodenBaseCharge) inputWoodenBaseCharge.value = 100;

  renderInvoice();
}

// Render Saved Invoice History List
function renderHistoryUI() {
  historyCount.textContent = `${savedInvoices.length} Saved`;
  historyListContainer.innerHTML = '';

  if (savedInvoices.length === 0) {
    historyListContainer.innerHTML = `
      <div style="text-align: center; color: #71717A; padding: 0.75rem; font-size: 0.75rem;">
        No saved invoices yet. Click "Save & New Bill" to store invoices.
      </div>
    `;
    return;
  }

  savedInvoices.forEach(inv => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <div class="history-meta">
        <span class="history-inv-no">${escapeHtml(inv.invoiceNo)}</span>
        <span class="history-cust">${escapeHtml(inv.customerName)} (${inv.date || 'No Date'})</span>
      </div>
      <div class="history-right">
        <span class="history-amount">Rs. ${formatCurrency(inv.grandTotal)}</span>
        <button class="btn-history-load" title="Load / View Bill" data-id="${inv.id}">
          <i class="fa-solid fa-folder-open"></i>
        </button>
        <button class="btn-history-del" title="Delete from History" data-id="${inv.id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;

    div.querySelector('.btn-history-load').addEventListener('click', () => loadInvoiceFromHistory(inv.id));
    div.querySelector('.btn-history-del').addEventListener('click', () => deleteInvoiceFromHistory(inv.id));

    historyListContainer.appendChild(div);
  });
}

function loadInvoiceFromHistory(id) {
  const record = savedInvoices.find(i => i.id === id);
  if (!record) return;

  inputInvoiceNo.value = record.invoiceNo;
  inputInvoiceDate.value = record.date;
  inputCustName.value = record.customerName || '';
  inputCustPhone.value = record.customerPhone || '';
  inputCustEmail.value = record.customerEmail || '';
  inputCustAddress.value = record.customerAddress || '';
  
  if (chkEnableDiscount) {
    chkEnableDiscount.checked = record.discountEnabled !== undefined ? record.discountEnabled : true;
  }
  setDiscountMode(record.discountMode || 'flat', record.discountInputVal !== undefined ? record.discountInputVal : (record.discount || 0));

  if (inputLabourCharge) inputLabourCharge.value = record.labourCharge || 0;
  inputWoodenBaseCharge.value = record.woodenBaseCharge || 0;

  invoiceItems = JSON.parse(JSON.stringify(record.items || []));
  renderInvoice();
}

function deleteInvoiceFromHistory(id) {
  if (confirm("Are you sure you want to delete this invoice from history?")) {
    savedInvoices = savedInvoices.filter(i => i.id !== id);
    saveHistoryToStorage();
    renderHistoryUI();
  }
}

// Render Catalog List
function renderCatalog() {
  const query = catalogSearch.value.toLowerCase().trim();
  const filtered = currentCatalog.filter(item => 
    item.name.toLowerCase().includes(query)
  );

  catalogCount.textContent = filtered.length;
  catalogListContainer.innerHTML = '';

  if (filtered.length === 0) {
    catalogListContainer.innerHTML = `
      <div style="text-align: center; color: #71717A; padding: 1rem; font-size: 0.8rem;">
        No components matching "${query}"
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'catalog-item';
    div.innerHTML = `
      <div class="catalog-item-name">${escapeHtml(item.name)}</div>
      <div class="catalog-item-prices">
        <span class="badge-actual-price" title="Unit Price">Rs. ${item.price}</span>
        <i class="fa-solid fa-plus-circle btn-add-item-icn"></i>
      </div>
    `;
    div.addEventListener('click', () => addItemToInvoice(item));
    catalogListContainer.appendChild(div);
  });
}

// Add Item from Catalog to Invoice
function addItemToInvoice(catalogItem) {
  const existing = invoiceItems.find(i => i.description.toLowerCase() === catalogItem.name.toLowerCase());
  if (existing) {
    existing.qty += 1;
  } else {
    invoiceItems.push({
      id: Date.now() + Math.random(),
      description: catalogItem.name,
      qty: 1,
      unitPrice: catalogItem.price
    });
  }
  renderInvoice();
}

// Handle Custom Item Addition
function handleAddCustomItem() {
  const desc = customDesc.value.trim();
  const qty = parseInt(customQty.value) || 1;
  const priceVal = parseFloat(customPrice.value) || 0;

  if (!desc) {
    alert("Please enter item description!");
    customDesc.focus();
    return;
  }

  invoiceItems.push({
    id: Date.now(),
    description: desc,
    qty: Math.max(1, qty),
    unitPrice: Math.max(0, priceVal)
  });

  customDesc.value = '';
  customQty.value = 1;
  customPrice.value = '';

  renderInvoice();
}

// Render Main Invoice Sheet
function renderInvoice() {
  updateInvoiceViews();
  renderTableRows();
  calculateTotals();
  if (mobileItemBadge) mobileItemBadge.textContent = invoiceItems.length;
  if (viewBillBadge) viewBillBadge.textContent = invoiceItems.length;
  if (fabItemBadge) fabItemBadge.textContent = invoiceItems.length;
}

// Update Header & Address Text
function updateInvoiceViews() {
  viewInvoiceNo.textContent = inputInvoiceNo.value || 'INV-2026-001';
  
  const dVal = inputInvoiceDate.value;
  if (dVal) {
    const [y, m, d] = dVal.split('-');
    viewInvoiceDate.textContent = `${d}/${m}/${y}`;
  } else {
    viewInvoiceDate.textContent = '-';
  }

  viewSellerName.textContent = inputSellerName.value || 'GOKULRAJ NATARAJAN';
  viewSellerNameSub.textContent = inputSellerName.value || 'GOKULRAJ NATARAJAN';
  viewSellerAddress.textContent = inputSellerAddress.value || '';
  viewSellerPhone.textContent = `Phone: ${inputSellerPhone.value || '+91 934515852'}`;
  viewSellerEmail.textContent = `Email: ${inputSellerEmail.value || 'gokulnatraj06@gmail.com'}`;

  viewCustName.textContent = inputCustName.value || 'Customer Name';
  viewCustAddress.textContent = inputCustAddress.value || '';
  viewCustPhone.textContent = inputCustPhone.value ? `Phone: ${inputCustPhone.value}` : '';
  viewCustEmail.textContent = inputCustEmail.value ? `Email: ${inputCustEmail.value}` : '';
}

// Render Table Rows with Inline Editors
function renderTableRows() {
  invoiceTableBody.innerHTML = '';

  if (invoiceItems.length === 0) {
    invoiceTableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: #9CA3AF; padding: 2rem; font-style: italic;">
          No items added to bill yet. Select components from the left catalog or add custom items.
        </td>
      </tr>
    `;
    return;
  }

  invoiceItems.forEach((item, index) => {
    const rowAmount = item.qty * item.unitPrice;
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td class="cell-sno">${index + 1}</td>
      <td class="cell-desc">
        ${escapeHtml(item.description)}
        <button class="item-delete-btn no-print" title="Remove item" data-index="${index}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
      <td class="cell-qty">
        <input type="number" class="inline-edit-qty" value="${item.qty}" min="1" data-index="${index}">
      </td>
      <td class="cell-unit">
        <input type="number" class="inline-edit-price" value="${item.unitPrice}" min="0" step="0.01" data-index="${index}">
      </td>
      <td class="cell-total">${formatCurrency(rowAmount)}</td>
    `;

    invoiceTableBody.appendChild(tr);
  });

  // Attach Inline Input Listeners
  invoiceTableBody.querySelectorAll('.inline-edit-qty').forEach(input => {
    input.addEventListener('change', (e) => {
      const idx = e.target.getAttribute('data-index');
      const val = parseInt(e.target.value) || 1;
      invoiceItems[idx].qty = Math.max(1, val);
      renderInvoice();
    });
  });

  invoiceTableBody.querySelectorAll('.inline-edit-price').forEach(input => {
    input.addEventListener('change', (e) => {
      const idx = e.target.getAttribute('data-index');
      const val = parseFloat(e.target.value) || 0;
      invoiceItems[idx].unitPrice = Math.max(0, val);
      renderInvoice();
    });
  });

  invoiceTableBody.querySelectorAll('.item-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = btn.getAttribute('data-index');
      invoiceItems.splice(idx, 1);
      renderInvoice();
    });
  });
}

// Calculate Summary Totals
// Math Rule:
// 1. Subtotal = sum(Component Qty * Unit Price)
// 2. Taxable Component Subtotal = Subtotal - Discount
// 3. GST 18% = Taxable Component Subtotal * 0.18
// 4. TAX 15% (Sourcing & Handling) = (Taxable Component Subtotal + GST) * 0.15
// 5. Labour Charge = user value (NO GST, NO TAX)
// 6. Wooden Base Charge = user value (NO GST, NO TAX)
// 7. Grand Total = Taxable Component Subtotal + GST 18% + TAX 15% + Labour Charge + Wooden Base Charge
function calculateTotals() {
  let subtotal = 0;
  invoiceItems.forEach(item => {
    subtotal += item.qty * item.unitPrice;
  });

  // Handle Discount Toggle and Mode (Flat vs Percent)
  let discount = 0;
  const isDiscountEnabled = chkEnableDiscount ? chkEnableDiscount.checked : true;

  if (isDiscountEnabled) {
    if (groupDiscountControls) groupDiscountControls.style.display = 'block';

    const inputVal = parseFloat(inputDiscount.value) || 0;
    if (discountMode === 'percent') {
      discount = (subtotal * inputVal) / 100;
      if (viewDiscountTag) viewDiscountTag.textContent = `(${inputVal}%)`;
    } else {
      discount = inputVal;
      if (viewDiscountTag) viewDiscountTag.textContent = `(Flat ₹)`;
    }

    // Toggle ON: Display discount line on bill if discount > 0
    if (discount > 0) {
      if (rowDiscount) rowDiscount.style.display = '';
      if (viewDiscount) viewDiscount.textContent = formatCurrency(discount);
    } else {
      if (rowDiscount) rowDiscount.style.display = 'none';
    }

    if (discountCalcHint) {
      discountCalcHint.textContent = `Effective Discount: ₹${formatCurrency(discount)}`;
    }
  } else {
    // Toggle OFF: Remove discount completely from bill
    if (groupDiscountControls) groupDiscountControls.style.display = 'none';
    if (rowDiscount) rowDiscount.style.display = 'none';
    discount = 0;
    if (discountCalcHint) {
      discountCalcHint.textContent = `Discount Disabled (Removed from bill)`;
    }
  }

  const taxable = Math.max(0, subtotal - discount);
  
  const gst = taxable * 0.18;
  const serviceTax = (taxable + gst) * 0.15;
  
  // Handle Labour Charge toggle
  let labourCharge = 0;
  if (chkEnableLabour && chkEnableLabour.checked) {
    labourCharge = parseFloat(inputLabourCharge.value) || 0;
    if (groupLabourInput) groupLabourInput.style.display = 'block';
    if (rowLabour) rowLabour.style.display = '';
  } else {
    if (groupLabourInput) groupLabourInput.style.display = 'none';
    if (rowLabour) rowLabour.style.display = 'none';
  }

  // Handle Wooden Base Charge toggle
  let woodenBaseCharge = 0;
  if (chkEnableWooden && chkEnableWooden.checked) {
    woodenBaseCharge = parseFloat(inputWoodenBaseCharge.value) || 0;
    if (groupWoodenInput) groupWoodenInput.style.display = 'block';
    if (rowWoodenBase) rowWoodenBase.style.display = '';
  } else {
    if (groupWoodenInput) groupWoodenInput.style.display = 'none';
    if (rowWoodenBase) rowWoodenBase.style.display = 'none';
  }
  
  const grandTotal = taxable + gst + serviceTax + labourCharge + woodenBaseCharge;

  viewSubtotal.textContent = formatCurrency(subtotal);
  viewTaxable.textContent = formatCurrency(taxable);
  viewGst.textContent = formatCurrency(gst);
  if (viewServiceTax) {
    viewServiceTax.textContent = formatCurrency(serviceTax);
  }
  if (viewLabourCharge) {
    viewLabourCharge.textContent = formatCurrency(labourCharge);
  }
  if (viewWoodenBaseCharge) {
    viewWoodenBaseCharge.textContent = formatCurrency(woodenBaseCharge);
  }

  viewGrandTotal.textContent = formatCurrency(grandTotal);

  return { subtotal, discount, taxable, gst, serviceTax, labourCharge, woodenBaseCharge, grandTotal };
}

// Parse Excel File Upload
function handleExcelUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (jsonRows.length < 2) {
        alert("The uploaded excel sheet appears empty.");
        return;
      }

      const newCatalog = [];
      for (let i = 1; i < jsonRows.length; i++) {
        const row = jsonRows[i];
        if (row && row[0]) {
          const name = String(row[0]).trim();
          const baseP = parseFloat(row[1]) || 0;
          const gstP = parseFloat(row[2]) || baseP * 1.18;
          const actualP = parseFloat(row[3]) || baseP;

          newCatalog.push({
            id: i,
            name: name,
            price: baseP,
            withGst: gstP,
            mrp: actualP
          });
        }
      }

      if (newCatalog.length > 0) {
        currentCatalog = newCatalog;
        renderCatalog();
        if (liveSyncStatus) {
          liveSyncStatus.innerHTML = `<i class="fa-solid fa-circle font-green"></i> Loaded ${newCatalog.length} Items`;
        }
        alert(`Successfully loaded ${newCatalog.length} items from Excel!`);
      }
    } catch (err) {
      console.error(err);
      alert("Error parsing Excel file. Please ensure it is a valid .xlsx file.");
    }
  };
  reader.readAsArrayBuffer(file);
}

// Fetch & Sync Live PRICE.xlsx Automatically
function loadLiveExcelFile(showNotification = false) {
  const statusEl = document.getElementById('liveSyncStatus');
  if (statusEl) {
    statusEl.innerHTML = `<i class="fa-solid fa-spinner fa-spin font-green"></i> Syncing PRICE.xlsx...`;
  }
  
  fetch('PRICE.xlsx?t=' + Date.now())
    .then(response => {
      if (!response.ok) throw new Error('PRICE.xlsx not accessible via HTTP');
      return response.arrayBuffer();
    })
    .then(buffer => {
      const data = new Uint8Array(buffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (jsonRows.length > 1) {
        const newCatalog = [];
        for (let i = 1; i < jsonRows.length; i++) {
          const row = jsonRows[i];
          if (row && row[0]) {
            newCatalog.push({
              id: i,
              name: String(row[0]).trim(),
              price: parseFloat(row[1]) || 0,
              withGst: parseFloat(row[2]) || 0,
              mrp: parseFloat(row[3]) || 0
            });
          }
        }
        if (newCatalog.length > 0) {
          currentCatalog = newCatalog;
          renderCatalog();
          if (statusEl) {
            statusEl.innerHTML = `<i class="fa-solid fa-circle font-green"></i> Live Excel (${newCatalog.length} Items)`;
          }
          if (showNotification) {
            alert(`Live Sync Success! Loaded ${newCatalog.length} components directly from PRICE.xlsx`);
          }
        }
      }
    })
    .catch(err => {
      console.log('Live Excel fetch notice:', err.message);
      if (statusEl) {
        statusEl.innerHTML = `<i class="fa-solid fa-circle font-green"></i> Built-in Catalog (${currentCatalog.length} Items)`;
      }
    });
}

function downloadPDF() {
  saveCurrentInvoiceToHistory(false);
  window.print();
}

function printInvoice() {
  saveCurrentInvoiceToHistory(false);
  window.print();
}

// Helper: Format Currency (e.g. 12,345.67)
function formatCurrency(num) {
  return num.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Helper: Escape HTML
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --------------------------------------------------------------------------
// MOBILE VIEW SWITCHING & RESPONSIVE A4 SHEET AUTO-SCALING
// --------------------------------------------------------------------------
function setupMobileViewsAndZoom() {
  if (tabEdit && tabPreview) {
    tabEdit.addEventListener('click', () => setMobileTab('editor'));
    tabPreview.addEventListener('click', () => setMobileTab('preview'));
  }

  if (btnViewBill) {
    btnViewBill.addEventListener('click', () => {
      setMobileTab('preview');
      const previewPanel = document.querySelector('.preview-panel');
      if (previewPanel) previewPanel.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (fabToggleView) {
    fabToggleView.addEventListener('click', () => {
      if (appLayout && appLayout.classList.contains('show-preview')) {
        setMobileTab('editor');
      } else {
        setMobileTab('preview');
      }
    });
  }

  if (btnMobileSave) {
    btnMobileSave.addEventListener('click', () => saveAndStartNewInvoice(true));
  }

  if (btnMobilePrint) {
    btnMobilePrint.addEventListener('click', printInvoice);
  }

  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', () => {
      isAutoFitZoom = false;
      currentZoomScale = Math.min(1.5, currentZoomScale + 0.1);
      applyA4Scale(currentZoomScale, false);
    });
  }

  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', () => {
      isAutoFitZoom = false;
      currentZoomScale = Math.max(0.3, currentZoomScale - 0.1);
      applyA4Scale(currentZoomScale, false);
    });
  }

  if (btnZoomReset) {
    btnZoomReset.addEventListener('click', () => {
      isAutoFitZoom = true;
      autoScaleA4Sheet();
    });
  }

  window.addEventListener('resize', () => {
    if (isAutoFitZoom) {
      autoScaleA4Sheet();
    }
  });

  // Delay initial scale calculation slightly to ensure layout rendering
  setTimeout(autoScaleA4Sheet, 100);
}

function setMobileTab(tab) {
  if (!appLayout) return;

  // Always scroll window to top immediately on tab switch
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  if (tab === 'editor') {
    appLayout.classList.add('show-editor');
    appLayout.classList.remove('show-preview');
    if (tabEdit) tabEdit.classList.add('active');
    if (tabPreview) tabPreview.classList.remove('active');
    if (fabToggleView) {
      fabToggleView.classList.remove('fab-in-preview');
      fabToggleView.innerHTML = `<i class="fa-solid fa-eye"></i> View A4 Bill (<span id="fabItemBadge">${invoiceItems.length}</span>)`;
    }
  } else {
    appLayout.classList.remove('show-editor');
    appLayout.classList.add('show-preview');
    if (tabEdit) tabEdit.classList.remove('active');
    if (tabPreview) tabPreview.classList.add('active');
    if (fabToggleView) {
      fabToggleView.classList.add('fab-in-preview');
      fabToggleView.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Back to Form`;
    }
    setTimeout(autoScaleA4Sheet, 30);
  }
}

function autoScaleA4Sheet() {
  if (!a4ScaleContainer || !a4Wrapper) return;
  
  const windowWidth = window.innerWidth;
  const a4WidthPx = 794; // 210mm in px
  
  if (windowWidth <= 1024) {
    const padding = windowWidth <= 640 ? 16 : 32;
    const availableWidth = windowWidth - padding;
    let scale = availableWidth / a4WidthPx;
    scale = Math.min(1.0, Math.max(0.30, scale));
    currentZoomScale = scale;
    applyA4Scale(scale, true);
  } else {
    currentZoomScale = 1.0;
    applyA4Scale(1.0, false);
  }
}

function applyA4Scale(scale, isFit = false) {
  if (!a4ScaleContainer || !a4Wrapper) return;

  a4ScaleContainer.style.width = '794px';
  a4ScaleContainer.style.transformOrigin = 'top center';
  a4ScaleContainer.style.transform = `scale(${scale})`;

  const unscaledHeight = 1122; // 297mm in px
  const scaledHeight = unscaledHeight * scale;
  const marginBottomComp = (scaledHeight - unscaledHeight);

  a4ScaleContainer.style.marginBottom = `${marginBottomComp + 20}px`;
  a4Wrapper.style.minHeight = `${scaledHeight + 40}px`;
  
  if (zoomLevelText) {
    if (isFit && isAutoFitZoom) {
      zoomLevelText.textContent = `Fit (${Math.round(scale * 100)}%)`;
    } else {
      zoomLevelText.textContent = `${Math.round(scale * 100)}%`;
    }
  }
}

