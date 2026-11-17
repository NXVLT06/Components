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

// Comprehensive Knowledge Base of Popular Electronics & IoT Projects
const PROJECT_DATABASE = [
  {
    title: "Smart Irrigation System using IoT",
    category: "AgriTech / IoT",
    keywords: ["irrigation", "soil", "moisture", "plant", "agriculture", "farm", "water motor"],
    principle: "The soil moisture sensor continuously measures the volumetric water content in soil by determining electrical conductivity between probes. When moisture drops below a threshold, the Arduino microcontroller triggers the 5V relay module to activate the water motor pump, irrigating crops until optimal moisture is restored.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "SOIL MOISOR SENSOR (WET)", qty: 1 },
      { name: "5V RELAY MODULE", qty: 1 },
      { name: "WATER MOTOR", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 },
      { name: "BREADBOARD", qty: 1 }
    ]
  },
  {
    title: "Obstacle Avoiding Robot / Autonomous Rover",
    category: "Robotics",
    keywords: ["obstacle", "avoiding", "robot", "rover", "car", "ultrasonic", "collision"],
    principle: "The ultrasonic sensor emits high-frequency sound wave pulses and measures echo reflection time to calculate obstacle distance. If an object is detected within range, the Arduino halts forward movement, rotates the servo-mounted sensor to find a clear path, and steers the robot away from collisions.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "ULTRASONIC SENSOR", qty: 1 },
      { name: "SERVO MOTOR SG90", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 },
      { name: "BREADBOARD", qty: 1 }
    ]
  },
  {
    title: "IoT Smart Weather & Environmental Station",
    category: "IoT / Environmental",
    keywords: ["weather", "environment", "climate", "temperature", "humidity", "dht11", "esp32"],
    principle: "The DHT11 capacitive humidity sensor and NTC thermistor capture ambient temperature and humidity data. The ESP32 microcontroller processes these signals, renders real-time graphical metrics onto the 0.96-inch OLED display, and transmits data telemetry to a cloud dashboard over Wi-Fi.",
    components: [
      { name: "ESP32", qty: 1 },
      { name: "DHT11", qty: 1 },
      { name: "OLED 0.96", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 },
      { name: "BREADBOARD", qty: 1 }
    ]
  },
  {
    title: "Gas Leakage & Smoke Detection System with Alert",
    category: "Safety & Security",
    keywords: ["gas", "smoke", "mq2", "leak", "fire", "lpg", "toxic"],
    principle: "The MQ-2 sensor utilizes a SnO2 sensitive layer whose electrical conductivity increases when exposed to combustible gases like LPG, smoke, and methane. The Arduino samples the analog voltage; when threshold is breached, it sounds an acoustic buzzer alarm and flashes safety alerts on the 16x2 LCD.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "MQ2 SMOKE/GAS SENSOR", qty: 1 },
      { name: "BUZZER MODULE", qty: 1 },
      { name: "LCD 16X2", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "RFID Based Attendance & Smart Door Lock Access",
    category: "Security / Automation",
    keywords: ["rfid", "attendance", "door lock", "access", "rc522", "security", "gate"],
    principle: "The RC522 RFID reader transmits a 13.56 MHz electromagnetic field that powers passive RFID tags. The tag modulates its unique UID back to the reader via SPI. The microcontroller validates the UID against stored authorization tables; on approval, it actuates the servo lock latch and chimes the buzzer.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "RFID RC522", qty: 1 },
      { name: "SERVO MOTOR SG90", qty: 1 },
      { name: "BUZZER MODULE", qty: 1 },
      { name: "LCD 16X2", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "IoT Patient Vital Health Monitoring System",
    category: "Biomedical / IoT",
    keywords: ["health", "patient", "heart", "pulse", "spo2", "vital", "medical", "max30102"],
    principle: "Uses dual-wavelength photoplethysmography (PPG) with red and infrared LEDs in the MAX30102 sensor to calculate blood oxygen saturation (SpO2) and pulse rate. The MLX90614 reads non-contact optical infrared radiation for body temperature, streaming vitals to doctors over IoT.",
    components: [
      { name: "ESP32", qty: 1 },
      { name: "MAX30102 PULSE", qty: 1 },
      { name: "MLX90614 TEMP SENSOR", qty: 1 },
      { name: "OLED 0.96", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "GPS & GSM Vehicle Tracking and Accident Alert",
    category: "Automotive / Embedded",
    keywords: ["gps", "gsm", "vehicle", "tracking", "accident", "sim800l", "alert", "car tracking"],
    principle: "The MPU6050 6-axis accelerometer monitors sudden impact shocks and vehicle rollover tilt. Upon collision detection, the NEO-6M GPS acquires real-time latitude/longitude coordinates, and the SIM800L module automatically sends an emergency SMS with Google Maps coordinates to responders.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "GPS MODULE NEO 6M", qty: 1 },
      { name: "SIM800L", qty: 1 },
      { name: "MPU6050", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Smart Water Quality & Purity Testing System",
    category: "Environmental",
    keywords: ["water quality", "tds", "ph", "purity", "drinking water", "water contamination"],
    principle: "The TDS probe measures total dissolved ions through AC electrical conductivity, while the pH glass electrode probe measures hydrogen ion potential. The Arduino calculates PPM and pH value, displays potable purity status on the LCD 16x2, and sounds an alarm if contamination is detected.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "TDS SENSOR", qty: 1 },
      { name: "PH SENSOR", qty: 1 },
      { name: "LCD 16X2", qty: 1 },
      { name: "BUZZER MODULE", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Smart Digital Energy Meter with Overload Circuit Breaker",
    category: "Power Systems",
    keywords: ["energy meter", "current", "voltage", "power", "acs712", "overload", "electricity"],
    principle: "The ACS712 Hall-effect transducer senses load current and the voltage sensor measures voltage drop across a precision divider. The microcontroller calculates instant power (W) and cumulative energy consumption (kWh). If current exceeds safe limits, the 5V relay disconnects the circuit instantly.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "ACS712 20A CURRENT SENSOR", qty: 1 },
      { name: "DC VOLTMETER VOLT SENSOR", qty: 1 },
      { name: "5V RELAY MODULE", qty: 1 },
      { name: "LCD 16X2", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Touchless Automatic Hand Sanitizer & Temperature Scanner",
    category: "Healthcare / Automation",
    keywords: ["sanitizer", "touchless", "dispenser", "contactless", "temperature scanner", "hygiene"],
    principle: "An infrared proximity sensor detects when a hand is placed under the dispenser nozzle. The Arduino drives the mini water pump for a calibrated pulse to spray disinfectant, while the MLX90614 non-contact infrared sensor reads forehead/palm temperature, triggering the buzzer on fever readings.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "IR SENSOR", qty: 1 },
      { name: "MLX90614 TEMP SENSOR", qty: 1 },
      { name: "WATER MOTOR", qty: 1 },
      { name: "OLED 0.96", qty: 1 },
      { name: "BUZZER 12MM", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Digital Security Keypad Password Door Lock",
    category: "Security",
    keywords: ["keypad", "password", "pin", "lock", "security safe", "door lock"],
    principle: "The 4x4 matrix keypad is scanned row-by-column to read 4-digit user PIN entries. The Arduino compares the entered PIN with stored credentials in EEPROM; if valid, it drives the servo motor to unlock the latch mechanism. After three consecutive invalid attempts, it locks the system and sounds the alarm.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "KEYPAD 4X4", qty: 1 },
      { name: "LCD 16X2", qty: 1 },
      { name: "SERVO MOTOR SG90", qty: 1 },
      { name: "BUZZER MODULE", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Smart Blind Walking Assistance Stick",
    category: "Assistive Tech",
    keywords: ["blind", "walking stick", "cane", "visually impaired", "assistance"],
    principle: "An ultrasonic transducer mounted at the cane's tip transmits high-frequency acoustic pulses to scan for ground and knee-level obstacles. The Arduino computes target proximity; as obstacles come closer, it increases buzzer beep frequency to provide real-time acoustic navigation cues.",
    components: [
      { name: "Arduino Nano", qty: 1 },
      { name: "ULTRASONIC SENSOR", qty: 1 },
      { name: "BUZZER 12MM", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 },
      { name: "BREADBOARD", qty: 1 }
    ]
  },
  {
    title: "Industrial Automated Color Sorting Conveyor",
    category: "Industrial Automation",
    keywords: ["color", "sorting", "conveyor", "tcs3200", "industrial"],
    principle: "The TCS3200 sensor focuses reflected light onto an 8x8 array of filtered photodiodes, producing a square wave whose frequency is directly proportional to Red, Green, and Blue light intensity. The Arduino evaluates the RGB signature and commands dual servo gates to divert colored objects into designated sorting bins.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "COLOUR SENSOR YCS3200", qty: 1 },
      { name: "SERVO MOTOR SG90", qty: 2 },
      { name: "LCD 16X2", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "LoRa Long-Range Wireless Sensor Node for Agriculture",
    category: "Wireless / IoT",
    keywords: ["lora", "wireless", "long range", "sx1278", "telemetry"],
    principle: "Gathers microclimate temperature, relative humidity, and soil moisture metrics across sprawling agricultural acreage. The Arduino Nano formats data into encrypted packets and broadcasts them via 433 MHz Chirp Spread Spectrum (CSS) LoRa modulation over kilometers to a central receiver gateway.",
    components: [
      { name: "Arduino Nano", qty: 1 },
      { name: "LORA RA02 (SX1278)", qty: 1 },
      { name: "ANTENNA", qty: 1 },
      { name: "SMA150MM", qty: 1 },
      { name: "DHT11", qty: 1 },
      { name: "SOIL MOISOR SENSOR (WET)", qty: 1 },
      { name: "3.3V 5V LOGIC LEVEL CONVERTOR", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Smart Audio Announcer & Voice Prompt Player",
    category: "Embedded / Audio",
    keywords: ["audio", "voice", "announcer", "dfplayer", "sound", "mp3", "speech"],
    principle: "Integrates a hardware MP3/WAV decoding module with on-board micro-SD storage. When pushbutton triggers or external inputs occur, the Arduino sends asynchronous serial UART commands to the DFPlayer Mini to broadcast corresponding high-fidelity voice announcements or accessibility messages.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "DF PLAYER MINI", qty: 1 },
      { name: "PUSHBUTTON", qty: 2 },
      { name: "BUZZER MODULE", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Automatic Street Light & Smart Lighting Controller",
    category: "Smart City",
    keywords: ["street light", "lighting", "ldr", "smart light", "energy saving"],
    principle: "Senses ambient luminance transitions and motion of oncoming vehicles or pedestrians using IR sensors. The Arduino switches high-power illumination lamps via a 5V relay only when dusk and movement are detected, dimming or turning off during inactive hours to save electricity.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "IR SENSOR", qty: 1 },
      { name: "5V RELAY MODULE", qty: 1 },
      { name: "MIX RESISTOR BOX", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Smart Fall Detection & Elderly Motion Alert System",
    category: "Healthcare",
    keywords: ["fall detection", "elderly", "motion", "accident alert", "mpu6050", "accelerometer"],
    principle: "The MPU6050 MEMS sensor continuously measures tri-axial acceleration and rotational velocity. An algorithm recognizes rapid free-fall drops followed by severe impact force and prolonged zero-movement states, immediately sounding an audible alert and sending emergency GPS/SMS alerts to family members.",
    components: [
      { name: "Arduino Nano", qty: 1 },
      { name: "MPU6050", qty: 1 },
      { name: "BUZZER MODULE", qty: 1 },
      { name: "SIM800L", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Home Automation using ESP8266 & Wi-Fi",
    category: "Home Automation",
    keywords: ["home automation", "esp8266", "wifi", "smart home", "appliances", "iot relay"],
    principle: "The ESP8266 hosts an embedded lightweight HTTP web server connected to local Wi-Fi. Users can access a dashboard from any browser/smartphone to toggle relays controlling home AC appliances, with live status updates reflected on the LCD screen.",
    components: [
      { name: "ESP8266", qty: 1 },
      { name: "5V RELAY MODULE", qty: 1 },
      { name: "LCD 16X2", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 },
      { name: "BREADBOARD", qty: 1 }
    ]
  },
  {
    title: "Smart Inductive Metal Detector Robot",
    category: "Robotics / Security",
    keywords: ["metal detector", "metal", "inductive", "landmine", "scanner", "mine detection"],
    principle: "Uses electromagnetic induction in an inductive coil to detect eddy currents induced in conductive metals. When metallic objects are located, the resonant frequency alters, which the Arduino detects to trigger an acoustic buzzer alert and display target proximity on the LCD.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "METAL SENSOR", qty: 1 },
      { name: "BUZZER MODULE", qty: 1 },
      { name: "LCD 16X2", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  },
  {
    title: "Fire Fighting Robot with Smoke & Water Extinguisher",
    category: "Robotics / Safety",
    keywords: ["fire fighting", "fire", "smoke", "extinguisher", "flame", "safety robot"],
    principle: "Detects combustion fumes using the MQ-2 sensor. When hazard levels are sensed, the Arduino positions a water nozzle using a servo motor and energizes the relay-driven water pump to extinguish localized flames autonomously.",
    components: [
      { name: "Arduino uno", qty: 1 },
      { name: "MQ2 SMOKE/GAS SENSOR", qty: 1 },
      { name: "WATER MOTOR", qty: 1 },
      { name: "SERVO MOTOR SG90", qty: 1 },
      { name: "5V RELAY MODULE", qty: 1 },
      { name: "JUMPER WIRE", qty: 1 }
    ]
  }
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

// Project Specification & Auto-Builder Elements
let currentDetectedProjectComponents = [];
const inputProjectTitle = document.getElementById('inputProjectTitle');
const btnAutoSuggestProject = document.getElementById('btnAutoSuggestProject');
const projectPresetsList = document.getElementById('projectPresetsList');
const projectChipsContainer = document.getElementById('projectChipsContainer');
const inputWorkingPrinciple = document.getElementById('inputWorkingPrinciple');
const btnCopyPrinciple = document.getElementById('btnCopyPrinciple');
const projectComponentsPreview = document.getElementById('projectComponentsPreview');
const detectedItemCount = document.getElementById('detectedItemCount');
const detectedTotalEstimate = document.getElementById('detectedTotalEstimate');
const detectedChipsList = document.getElementById('detectedChipsList');
const btnLoadProjectItems = document.getElementById('btnLoadProjectItems');
const btnClearProject = document.getElementById('btnClearProject');
const chkShowProjectOnBill = document.getElementById('chkShowProjectOnBill');

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

// Project Specification Preview Views
const viewProjectSection = document.getElementById('viewProjectSection');
const viewProjectTitle = document.getElementById('viewProjectTitle');
const viewWorkingPrinciple = document.getElementById('viewWorkingPrinciple');
const viewProjectPrincipleRow = document.getElementById('viewProjectPrincipleRow');

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

  initProjectFeatures();
  bindEvents();
  setupMobileViewsAndZoom();
  renderCatalog();
  renderHistoryUI();
  renderInvoice();

  // Make Invoice Bill the main/default page on mobile devices!
  if (window.innerWidth <= 1024) {
    setMobileTab('preview');
  }
  
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

  // Project Title & Working Principle Event Listeners
  if (inputProjectTitle) {
    inputProjectTitle.addEventListener('input', () => {
      updateInvoiceViews();
      autoSuggestProjectDetails(false);
    });
    inputProjectTitle.addEventListener('change', () => {
      autoSuggestProjectDetails(false);
    });
  }

  if (btnAutoSuggestProject) {
    btnAutoSuggestProject.addEventListener('click', () => {
      autoSuggestProjectDetails(true);
    });
  }

  if (inputWorkingPrinciple) {
    inputWorkingPrinciple.addEventListener('input', updateInvoiceViews);
  }

  if (btnCopyPrinciple) {
    btnCopyPrinciple.addEventListener('click', copyWorkingPrinciple);
  }

  if (btnLoadProjectItems) {
    btnLoadProjectItems.addEventListener('click', loadProjectComponentsToBill);
  }

  if (btnClearProject) {
    btnClearProject.addEventListener('click', clearProjectDetails);
  }

  if (chkShowProjectOnBill) {
    chkShowProjectOnBill.addEventListener('change', updateInvoiceViews);
  }

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
    projectTitle: inputProjectTitle ? inputProjectTitle.value.trim() : '',
    workingPrinciple: inputWorkingPrinciple ? inputWorkingPrinciple.value.trim() : '',
    showProjectOnBill: (chkShowProjectOnBill ? chkShowProjectOnBill.checked : true),
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
  if (inputProjectTitle) inputProjectTitle.value = '';
  if (inputWorkingPrinciple) inputWorkingPrinciple.value = '';
  currentDetectedProjectComponents = [];
  if (projectComponentsPreview) projectComponentsPreview.style.display = 'none';
  document.querySelectorAll('.project-chip').forEach(c => c.classList.remove('active'));
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

  if (inputProjectTitle) inputProjectTitle.value = record.projectTitle || '';
  if (inputWorkingPrinciple) inputWorkingPrinciple.value = record.workingPrinciple || '';
  if (chkShowProjectOnBill) {
    chkShowProjectOnBill.checked = record.showProjectOnBill !== undefined ? record.showProjectOnBill : true;
  }
  if (record.projectTitle) {
    updateProjectComponentsPreview(record.projectTitle);
  } else if (projectComponentsPreview) {
    projectComponentsPreview.style.display = 'none';
  }
  
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

// ==========================================================================
// PROJECT SPECIFICATION & SMART BILL BUILDER ENGINE
// ==========================================================================

// Initialize Datalist and Quick Pick Project Chips
function initProjectFeatures() {
  if (projectPresetsList) {
    projectPresetsList.innerHTML = '';
    PROJECT_DATABASE.forEach(proj => {
      const opt = document.createElement('option');
      opt.value = proj.title;
      projectPresetsList.appendChild(opt);
    });
  }

  if (projectChipsContainer) {
    projectChipsContainer.innerHTML = '';
    const popularProjects = [
      { name: "Smart Irrigation", fullTitle: "Smart Irrigation System using IoT" },
      { name: "Obstacle Robot", fullTitle: "Obstacle Avoiding Robot / Autonomous Rover" },
      { name: "IoT Weather", fullTitle: "IoT Smart Weather & Environmental Station" },
      { name: "Gas Leak Alert", fullTitle: "Gas Leakage & Smoke Detection System with Alert" },
      { name: "RFID Access", fullTitle: "RFID Based Attendance & Smart Door Lock Access" },
      { name: "Health Monitor", fullTitle: "IoT Patient Vital Health Monitoring System" },
      { name: "GPS Tracking", fullTitle: "GPS & GSM Vehicle Tracking and Accident Alert" },
      { name: "Energy Meter", fullTitle: "Smart Digital Energy Meter with Overload Circuit Breaker" }
    ];

    popularProjects.forEach(chipData => {
      const chip = document.createElement('span');
      chip.className = 'project-chip';
      chip.textContent = chipData.name;
      chip.title = `Click to load ${chipData.fullTitle}`;
      chip.addEventListener('click', () => {
        document.querySelectorAll('.project-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const found = PROJECT_DATABASE.find(p => p.title === chipData.fullTitle);
        if (found) {
          applyProjectToBuilder(found);
        } else {
          if (inputProjectTitle) inputProjectTitle.value = chipData.fullTitle;
          autoSuggestProjectDetails(true);
        }
      });
      projectChipsContainer.appendChild(chip);
    });
  }
}

// Apply selected project to UI inputs, working principle, and preview
function applyProjectToBuilder(proj) {
  if (inputProjectTitle) inputProjectTitle.value = proj.title;
  if (inputWorkingPrinciple) inputWorkingPrinciple.value = proj.principle;
  updateProjectComponentsPreview(proj.title);
  updateInvoiceViews();
}

// Detect components and working principle from title or keywords
function detectProjectComponentsAndPrinciple(inputTitle) {
  if (!inputTitle || !inputTitle.trim()) return null;
  const cleanTitle = inputTitle.trim();
  const lower = cleanTitle.toLowerCase();

  // 1. Exact or Direct Match in Database
  for (const proj of PROJECT_DATABASE) {
    if (proj.title.toLowerCase() === lower) {
      return {
        matched: true,
        title: proj.title,
        principle: proj.principle,
        components: proj.components
      };
    }
  }

  // 2. Keyword Overlap Scoring
  let bestProj = null;
  let bestScore = 0;
  for (const proj of PROJECT_DATABASE) {
    let score = 0;
    if (proj.keywords) {
      for (const kw of proj.keywords) {
        if (lower.includes(kw.toLowerCase())) {
          score += 2;
        }
      }
    }
    const words = proj.title.toLowerCase().split(/\s+/);
    for (const w of words) {
      if (w.length > 3 && lower.includes(w)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestProj = proj;
    }
  }

  if (bestProj && bestScore >= 4) {
    return {
      matched: true,
      title: cleanTitle,
      principle: bestProj.principle,
      components: bestProj.components
    };
  }

  // 3. Fallback: Intelligent Keyword Analysis & Generator
  const suggestedComponents = [];
  const detectedSensors = [];
  const detectedActuators = [];

  function addComp(name, qty = 1) {
    if (!suggestedComponents.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      suggestedComponents.push({ name, qty });
    }
  }

  // Controller
  if (lower.includes("esp32")) {
    addComp("ESP32", 1);
  } else if (lower.includes("esp8266") || lower.includes("iot") || lower.includes("wifi") || lower.includes("cloud")) {
    addComp("ESP8266", 1);
  } else if (lower.includes("nano")) {
    addComp("Arduino Nano", 1);
  } else {
    addComp("Arduino uno", 1);
  }

  // Sensing hardware
  if (lower.includes("soil") || lower.includes("moisture") || lower.includes("irrigation") || lower.includes("plant") || lower.includes("crop")) {
    addComp("SOIL MOISOR SENSOR (WET)", 1);
    detectedSensors.push("soil moisture sensor");
  }
  if (lower.includes("ultrasonic") || lower.includes("obstacle") || lower.includes("distance") || lower.includes("blind") || lower.includes("radar")) {
    addComp("ULTRASONIC SENSOR", 1);
    detectedSensors.push("ultrasonic distance sensor");
  }
  if (lower.includes("temp") || lower.includes("humidity") || lower.includes("climate") || lower.includes("weather")) {
    if (lower.includes("dht22")) {
      addComp("DH22", 1);
      detectedSensors.push("high-accuracy DHT22 temperature and humidity sensor");
    } else {
      addComp("DHT11", 1);
      detectedSensors.push("DHT11 temperature and humidity sensor");
    }
  }
  if (lower.includes("gas") || lower.includes("smoke") || lower.includes("lpg") || lower.includes("air pollution") || lower.includes("toxic")) {
    addComp("MQ2 SMOKE/GAS SENSOR", 1);
    detectedSensors.push("MQ-2 electrochemical gas sensor");
  }
  if (lower.includes("rfid") || lower.includes("card") || lower.includes("attendance") || lower.includes("tag")) {
    addComp("RFID RC522", 1);
    detectedSensors.push("RC522 RFID reader");
  }
  if (lower.includes("pulse") || lower.includes("heart") || lower.includes("spo2") || lower.includes("patient") || lower.includes("health")) {
    addComp("MAX30102 PULSE", 1);
    detectedSensors.push("MAX30102 pulse oximeter sensor");
  }
  if (lower.includes("infrared") || lower.includes("ir") || lower.includes("proximity") || lower.includes("line")) {
    addComp("IR SENSOR", 1);
    detectedSensors.push("infrared proximity sensor");
  }
  if (lower.includes("metal") || lower.includes("inductive")) {
    addComp("METAL SENSOR", 1);
    detectedSensors.push("inductive metal sensor");
  }
  if (lower.includes("tds") || lower.includes("water quality")) {
    addComp("TDS SENSOR", 1);
    detectedSensors.push("TDS water purity sensor");
  }
  if (lower.includes("ph")) {
    addComp("PH SENSOR", 1);
    detectedSensors.push("pH probe sensor");
  }
  if (lower.includes("color") || lower.includes("colour")) {
    addComp("COLOUR SENSOR YCS3200", 1);
    detectedSensors.push("TCS3200 RGB color sensor");
  }
  if (lower.includes("gps") || lower.includes("location") || lower.includes("tracking")) {
    addComp("GPS MODULE NEO 6M", 1);
    detectedSensors.push("NEO-6M GPS receiver");
  }
  if (lower.includes("gyro") || lower.includes("accelerometer") || lower.includes("tilt") || lower.includes("vibration") || lower.includes("fall")) {
    addComp("MPU6050", 1);
    detectedSensors.push("MPU6050 6-axis gyro/accelerometer");
  }
  if (lower.includes("current") || lower.includes("power") || lower.includes("energy")) {
    addComp("ACS712 20A CURRENT SENSOR", 1);
    addComp("DC VOLTMETER VOLT SENSOR", 1);
    detectedSensors.push("ACS712 current and voltage sensors");
  }
  if (lower.includes("lora") || lower.includes("long range")) {
    addComp("LORA RA02 (SX1278)", 1);
    addComp("ANTENNA", 1);
    addComp("SMA150MM", 1);
    addComp("3.3V 5V LOGIC LEVEL CONVERTOR", 1);
  }
  if (lower.includes("voice") || lower.includes("audio") || lower.includes("sound") || lower.includes("speaker") || lower.includes("music")) {
    addComp("DF PLAYER MINI", 1);
  }
  if (lower.includes("gsm") || lower.includes("sms") || lower.includes("sim") || lower.includes("call")) {
    addComp("SIM800L", 1);
  }
  if (lower.includes("keypad") || lower.includes("pin") || lower.includes("password")) {
    addComp("KEYPAD 4X4", 1);
  }

  // Actuators
  if (lower.includes("motor") || lower.includes("pump") || lower.includes("water")) {
    addComp("5V RELAY MODULE", 1);
    addComp("WATER MOTOR", 1);
    detectedActuators.push("relay-driven DC motor/pump");
  } else if (lower.includes("relay") || lower.includes("light") || lower.includes("lamp") || lower.includes("switch")) {
    addComp("5V RELAY MODULE", 1);
    detectedActuators.push("5V relay switch");
  }
  if (lower.includes("servo") || lower.includes("arm") || lower.includes("door") || lower.includes("gate") || lower.includes("lock") || lower.includes("robot")) {
    addComp("SERVO MOTOR SG90", 1);
    detectedActuators.push("SG90 micro servo actuator");
  }
  if (lower.includes("alarm") || lower.includes("buzzer") || lower.includes("alert") || lower.includes("warning") || lower.includes("beeper")) {
    addComp("BUZZER MODULE", 1);
    detectedActuators.push("audible buzzer alert");
  }

  // Displays
  if (lower.includes("oled")) {
    addComp("OLED 0.96", 1);
  } else if (lower.includes("lcd") || lower.includes("display") || lower.includes("screen") || lower.includes("meter")) {
    addComp("LCD 16X2", 1);
  }

  // Wiring & Board
  addComp("JUMPER WIRE", 1);
  addComp("BREADBOARD", 1);

  const sensorDesc = detectedSensors.length > 0 ? detectedSensors.join(" and ") : "integrated input sensing transducers";
  const actuatorDesc = detectedActuators.length > 0 ? detectedActuators.join(" along with ") : "electronic actuators and indicators";
  const controllerName = suggestedComponents[0] ? suggestedComponents[0].name : "microcontroller unit";

  const generatedPrinciple = `The project operates using a ${controllerName} which continuously interfaces with the ${sensorDesc} to monitor target physical parameters. When incoming sensor signals exceed pre-set threshold values, the controller executes embedded logic routines to automatically command the ${actuatorDesc}, delivering reliable real-time operation, automation, and status feedback.`;

  return {
    matched: false,
    title: cleanTitle,
    principle: generatedPrinciple,
    components: suggestedComponents
  };
}

// Update the preview box showing detected components and estimated price
function updateProjectComponentsPreview(title) {
  if (!projectComponentsPreview || !detectedChipsList) return;

  const result = detectProjectComponentsAndPrinciple(title);
  if (!result || !result.components || result.components.length === 0) {
    currentDetectedProjectComponents = [];
    projectComponentsPreview.style.display = 'none';
    return;
  }

  currentDetectedProjectComponents = result.components;
  projectComponentsPreview.style.display = 'block';

  let totalEstimate = 0;
  detectedChipsList.innerHTML = '';

  result.components.forEach(comp => {
    // Lookup item price in currentCatalog
    const catItem = currentCatalog.find(c => c.name.toLowerCase() === comp.name.toLowerCase());
    const unitPrice = catItem ? catItem.price : 0;
    totalEstimate += unitPrice * comp.qty;

    const chip = document.createElement('div');
    chip.className = 'detected-chip';
    chip.innerHTML = `
      <span>${escapeHtml(comp.name)}</span>
      <span class="chip-qty">x${comp.qty}</span>
      <span class="chip-price">₹${unitPrice * comp.qty}</span>
    `;
    detectedChipsList.appendChild(chip);
  });

  if (detectedItemCount) detectedItemCount.textContent = result.components.length;
  if (detectedTotalEstimate) detectedTotalEstimate.textContent = `Est. ₹${formatCurrency(totalEstimate)}`;
}

// Auto-suggest button / input trigger
function autoSuggestProjectDetails(manualClick = false) {
  const title = inputProjectTitle ? inputProjectTitle.value.trim() : '';
  if (!title) {
    if (manualClick) {
      alert("Please enter or select a project title first!");
      inputProjectTitle.focus();
    }
    currentDetectedProjectComponents = [];
    if (projectComponentsPreview) projectComponentsPreview.style.display = 'none';
    updateInvoiceViews();
    return;
  }

  const result = detectProjectComponentsAndPrinciple(title);
  if (result) {
    if (inputWorkingPrinciple) {
      if (manualClick || !inputWorkingPrinciple.value.trim()) {
        inputWorkingPrinciple.value = result.principle;
      }
    }
    updateProjectComponentsPreview(title);
    updateInvoiceViews();
    if (manualClick) {
      alert(`Auto-detected ${result.components.length} components for "${title}"! Click "Load to Bill" to add them.`);
    }
  } else {
    if (manualClick) {
      alert(`No automatic components found for "${title}". You can select components manually from the catalog.`);
    }
  }
}

// Load detected project components directly into the bill
function loadProjectComponentsToBill() {
  const title = inputProjectTitle ? inputProjectTitle.value.trim() : '';
  if (!title) {
    alert("Please enter a project title or select one from the quick pick options first!");
    if (inputProjectTitle) inputProjectTitle.focus();
    return;
  }

  if (currentDetectedProjectComponents.length === 0) {
    const result = detectProjectComponentsAndPrinciple(title);
    if (result && result.components) {
      currentDetectedProjectComponents = result.components;
    }
  }

  if (currentDetectedProjectComponents.length === 0) {
    alert("No project components detected. Please choose a project or add items from the catalog.");
    return;
  }

  // Load components into invoiceItems
  let addedCount = 0;
  let updatedCount = 0;

  currentDetectedProjectComponents.forEach(comp => {
    const catItem = currentCatalog.find(c => c.name.toLowerCase() === comp.name.toLowerCase());
    const unitPrice = catItem ? catItem.price : 0;
    const desc = catItem ? catItem.name : comp.name;

    const existing = invoiceItems.find(i => i.description.toLowerCase() === desc.toLowerCase());
    if (existing) {
      existing.qty = Math.max(existing.qty, comp.qty);
      existing.unitPrice = unitPrice || existing.unitPrice;
      updatedCount++;
    } else {
      invoiceItems.push({
        id: Date.now() + Math.random(),
        description: desc,
        qty: comp.qty,
        unitPrice: unitPrice
      });
      addedCount++;
    }
  });

  renderInvoice();
  alert(`Successfully loaded ${addedCount + updatedCount} project components into the bill for "${title}"!`);
}

// Clear project details
function clearProjectDetails() {
  if (inputProjectTitle) inputProjectTitle.value = '';
  if (inputWorkingPrinciple) inputWorkingPrinciple.value = '';
  currentDetectedProjectComponents = [];
  if (projectComponentsPreview) projectComponentsPreview.style.display = 'none';
  document.querySelectorAll('.project-chip').forEach(c => c.classList.remove('active'));
  updateInvoiceViews();
}

// Copy working principle to clipboard
function copyWorkingPrinciple() {
  const text = inputWorkingPrinciple ? inputWorkingPrinciple.value.trim() : '';
  if (!text) {
    alert("No working principle text to copy!");
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    if (btnCopyPrinciple) {
      const origHtml = btnCopyPrinciple.innerHTML;
      btnCopyPrinciple.innerHTML = `<i class="fa-solid fa-check font-green"></i> Copied!`;
      setTimeout(() => {
        btnCopyPrinciple.innerHTML = origHtml;
      }, 2000);
    }
  }).catch(() => {
    alert("Working principle copied to clipboard!");
  });
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

  // Update Project Specification Views on A4 Sheet
  const showProject = chkShowProjectOnBill ? chkShowProjectOnBill.checked : true;
  const projectTitle = inputProjectTitle ? inputProjectTitle.value.trim() : '';
  const workingPrinciple = inputWorkingPrinciple ? inputWorkingPrinciple.value.trim() : '';

  if (viewProjectSection) {
    if (showProject && projectTitle) {
      viewProjectSection.style.display = 'block';
      if (viewProjectTitle) viewProjectTitle.textContent = projectTitle;
      
      if (viewProjectPrincipleRow) {
        if (workingPrinciple) {
          viewProjectPrincipleRow.style.display = 'flex';
          if (viewWorkingPrinciple) viewWorkingPrinciple.textContent = workingPrinciple;
        } else {
          viewProjectPrincipleRow.style.display = 'none';
        }
      }
    } else {
      viewProjectSection.style.display = 'none';
    }
  }
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

  if (tab === 'preview') {
    appLayout.classList.remove('show-editor');
    appLayout.classList.add('show-preview');
    if (tabPreview) tabPreview.classList.add('active');
    if (tabEdit) tabEdit.classList.remove('active');
    if (fabToggleView) {
      fabToggleView.classList.add('fab-in-preview');
      fabToggleView.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> ✏️ Edit Form / Add Items`;
    }
    setTimeout(autoScaleA4Sheet, 30);
  } else {
    appLayout.classList.add('show-editor');
    appLayout.classList.remove('show-preview');
    if (tabEdit) tabEdit.classList.add('active');
    if (tabPreview) tabPreview.classList.remove('active');
    if (fabToggleView) {
      fabToggleView.classList.remove('fab-in-preview');
      fabToggleView.innerHTML = `<i class="fa-solid fa-file-invoice"></i> 📄 View Invoice Bill (<span id="fabItemBadge">${invoiceItems.length}</span>)`;
    }
  }
}

function autoScaleA4Sheet() {
  if (!a4ScaleContainer || !a4Wrapper) return;
  
  const windowWidth = window.innerWidth;
  const a4WidthPx = 794;
  
  if (windowWidth <= 640) {
    currentZoomScale = 1.0;
    applyA4Scale(1.0, true);
  } else if (windowWidth <= 1024) {
    const availableWidth = windowWidth - 32;
    let scale = availableWidth / a4WidthPx;
    scale = Math.min(1.0, Math.max(0.40, scale));
    currentZoomScale = scale;
    applyA4Scale(scale, true);
  } else {
    currentZoomScale = 1.0;
    applyA4Scale(1.0, false);
  }
}

function applyA4Scale(scale, isFit = false) {
  if (!a4ScaleContainer || !a4Wrapper) return;

  if (window.innerWidth <= 640 && isAutoFitZoom) {
    a4ScaleContainer.style.width = '100%';
    a4ScaleContainer.style.transform = 'none';
    a4ScaleContainer.style.marginBottom = '0px';
    a4Wrapper.style.minHeight = 'auto';
  } else {
    a4ScaleContainer.style.width = '794px';
    a4ScaleContainer.style.transformOrigin = 'top center';
    a4ScaleContainer.style.transform = `scale(${scale})`;

    const unscaledHeight = 1122;
    const scaledHeight = unscaledHeight * scale;
    const marginBottomComp = (scaledHeight - unscaledHeight);

    a4ScaleContainer.style.marginBottom = `${marginBottomComp + 20}px`;
    a4Wrapper.style.minHeight = `${scaledHeight + 40}px`;
  }
  
  if (zoomLevelText) {
    if (isFit && isAutoFitZoom) {
      zoomLevelText.textContent = window.innerWidth <= 640 ? '100%' : `Fit (${Math.round(scale * 100)}%)`;
    } else {
      zoomLevelText.textContent = `${Math.round(scale * 100)}%`;
    }
  }
}

