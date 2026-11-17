# Electronics Components A4 Invoice Generator

A clean, modern, single-page printable A4 billing web application tailored for electronics component sales with auto invoice numbering, saved invoice history, pre-loaded component catalog, customizable non-taxable charges, and instant PDF print export.

## Features
- **Project Specification & Smart Bill Builder**:
  - Enter or pick any project title (e.g. *Smart Irrigation System, Obstacle Avoiding Robot, IoT Weather Station, Gas Leak Alert, RFID Door Lock, Health Monitor*).
  - Automatically identifies required components from the catalog and calculates cost estimates.
  - Generates and displays the comprehensive engineering **Working Principle** of the project with a 1-click copy feature.
  - 1-click **"Load to Bill"** immediately populates the bill items table with component quantities and unit prices.
  - Dedicated **Project Specification** card on the live A4 invoice preview and single-page printout with toggle control.
- **Seller Header**: Pre-configured for `GOKULRAJ NATARAJAN` (Phone: `+91 934515852`, Email: `gokulnatraj06@gmail.com`).
- **Component Catalog**: Pre-loaded with 42 electronic components & prices with dynamic search and live Excel upload support (`PRICE.xlsx`).
- **Customizable Charges**: Interactive toggle switches for Assembly & Labour Charge and Wooden Mounting Board & Chassis.
- **Auto Invoice & History**: Auto-incrementing Invoice No (`INV-2026-001`) with full `localStorage` bill history log, including saved project title and working principle.
- **Single Page Print / PDF Export**: Vector-perfect 1-page A4 print layout with vibrant black, white, and red styling.
- **Dual Signatures**: Customer Signature & Authorized Signature with dedicated signing space.

## Technologies Used
- HTML5 / Vanilla JavaScript (ES6+)
- Custom CSS3 (A4 Exact Print Styling)
- FontAwesome Icons & Google Fonts
- SheetJS (`xlsx`) for Excel Parsing
