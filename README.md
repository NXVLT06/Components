# Electronics Components A4 Invoice Generator & AI Project Builder

A clean, modern, single-page printable A4 billing web application tailored for electronics component sales with AI Engine 2.0, auto invoice numbering, saved invoice history, pre-loaded component catalog, customizable non-taxable charges, and instant PDF print export.

## Features
- **AI Engine 2.0 Project & Bill Assistant**:
  - **Comprehensive 58+ Project Knowledge Base**: Spanning *AgriTech, Robotics, IoT, Healthcare & Biomedical, Security & Access Control, Smart City, and Power & Energy*.
  - **Target Microcontroller Selector**: Switch between `Auto-Detect (AI Best Pick)`, `Arduino Uno`, `Arduino Nano`, `ESP32`, `ESP8266`, and `Arduino Leonardo`. Changing the microcontroller dynamically swaps the controller in the bill estimate with live price updates!
  - **Natural Language Semantic & Fuzzy NLP**: Intelligent multi-token keyword scoring, stemming, synonym mapping, and Levenshtein typo-tolerance.
  - **AI Generative Architecture Synthesizer**: Generates optimized microcontroller, sensor, actuator, display, and wiring configurations for arbitrary custom queries and prompts.
  - **Category Quick-Filter**: Seamless one-click category filtering (`All`, `AgriTech`, `Robotics`, `IoT`, `Healthcare`, `Security`, `Smart City`, `Power/Energy`).
  - **AI Confidence & Architecture Rationale**: Real-time match confidence pill (`98% Match`, `AI Synthesized`) and architectural reasoning explanation.
  - **Engineering Working Principle for Documentation**: Displays complete operating principles in the editor for student/engineering reports and copy-to-clipboard.
  - **Clean Professional Bill (No Working Principle on Bill)**: On the printed A4 invoice and PDF export, only the clean **Project Name** is shown under Project Specification — strictly omitting technical working principle paragraphs to ensure a compact, professional commercial invoice.
  - **1-Click "Load to Bill"**: Instantly populates the bill items table with component quantities and unit prices matching catalog rates.
- **Dedicated Bill Download Directory (`C:\Users\Gokulnatraj\Documents\BILL`)**:
  - Integrated local server (`node server.js` / `start-server.bat`) that saves generated PDF bills directly into `C:\Users\Gokulnatraj\Documents\BILL`.
  - Also integrates modern File System Access API (`showSaveFilePicker`) with `startIn: 'documents'` for instant 1-click saving.
- **Digital Authorized Signature**:
  - Pre-loaded with `Gokulraj Natarajan` signature (`signature.png`) on the invoice.
  - Includes a 90° rotation toggle and custom signature upload feature.
- **Seller Header**: Pre-configured for `GOKULRAJ NATARAJAN` (Phone: `+91 934515852`, Email: `gokulnatraj06@gmail.com`).
- **Component Catalog**: Pre-loaded with 42 electronic components & prices with dynamic search and live Excel upload support (`PRICE.xlsx`).
- **Customizable Charges**: Interactive toggle switches for Assembly & Labour Charge and Wooden Mounting Board & Chassis.
- **Auto Invoice & History**: Auto-incrementing Invoice No (`INV-2026-001`) with full `localStorage` bill history log.
- **Single Page Print / PDF Export**: Vector-perfect 1-page A4 print layout with vibrant black, white, and red styling.
- **Dual Signatures**: Customer Signature & Authorized Signature with dedicated signing space.

## Technologies Used
- HTML5 / Vanilla JavaScript (ES6+)
- Custom CSS3 (A4 Exact Print Styling)
- FontAwesome Icons & Google Fonts
- SheetJS (`xlsx`) for Excel Parsing
