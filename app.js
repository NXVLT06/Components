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

// Comprehensive Knowledge Base of Popular Electronics & IoT Projects (AI Engine 2.0)
const PROJECT_DATABASE = [
  {
    "title": "Smart Irrigation System using IoT",
    "category": "AgriTech",
    "keywords": [
      "irrigation",
      "soil",
      "moisture",
      "plant",
      "agriculture",
      "farm",
      "water motor",
      "pump",
      "automated watering"
    ],
    "principle": "The soil moisture sensor continuously measures the volumetric water content in soil by determining electrical conductivity between probes. When moisture drops below a threshold, the Arduino microcontroller triggers the 5V relay module to activate the water motor pump, irrigating crops until optimal moisture is restored.",
    "reasoning": "Arduino Uno acts as the central logic unit, sampling analog resistance from the soil moisture probe and driving the 5V relay to pump water automatically.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "SOIL MOISOR SENSOR (WET)",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "WATER MOTOR",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      }
    ]
  },
  {
    "title": "Automated Greenhouse Climate & Soil Control System",
    "category": "AgriTech",
    "keywords": [
      "greenhouse",
      "climate",
      "soil moisture",
      "temperature",
      "humidity",
      "dht11",
      "water motor",
      "irrigation"
    ],
    "principle": "Monitors ambient microclimate using the DHT11 sensor while testing subterranean root moisture with the wet soil sensor. When temperature spikes or soil desiccates, the ESP32 activates the water motor pump and cooling fan via relay, streaming greenhouse telemetry over Wi-Fi.",
    "reasoning": "ESP32 provides high-speed dual-core processing and Wi-Fi for telemetry, paired with DHT11 and Soil Moisture for complete microclimate automation.",
    "components": [
      {
        "name": "ESP32",
        "qty": 1
      },
      {
        "name": "SOIL MOISOR SENSOR (WET)",
        "qty": 1
      },
      {
        "name": "DHT11",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "WATER MOTOR",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Plant Watering System with Soil & Rain Detection",
    "category": "AgriTech",
    "keywords": [
      "plant watering",
      "garden",
      "pot",
      "drip irrigation",
      "soil moisture",
      "automatic watering"
    ],
    "principle": "An automated potted plant irrigator where a wet soil sensor probes substrate moisture level. When dry conditions are sensed, the Arduino Nano switches the mini 5V water pump for a calibrated duration, sounding a low-water reminder buzzer when the reservoir is exhausted.",
    "reasoning": "Compact Arduino Nano form-factor makes it ideal for indoor planters, interfacing directly with soil moisture sensor, buzzer, and pump relay.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "SOIL MOISOR SENSOR (WET)",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "WATER MOTOR",
        "qty": 1
      },
      {
        "name": "BUZZER 12MM",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Water Tank Overflow Alarm & Auto Pump Controller",
    "category": "AgriTech",
    "keywords": [
      "water tank",
      "overflow",
      "water level",
      "overhead tank",
      "pump controller",
      "ultrasonic level",
      "sump"
    ],
    "principle": "An ultrasonic transducer mounted at the top of the water tank scans water surface height via acoustic echo timing. When water reaches the high cutoff threshold, the microcontroller cuts relay power to prevent overflow; when water falls below minimum reserve, it engages the pump automatically and sounds a status buzzer.",
    "reasoning": "Ultrasonic sensor offers non-contact liquid level sensing, avoiding corrosion, paired with LCD 16x2 for real-time percentage readout.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "ULTRASONIC SENSOR",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "WATER MOTOR",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Water Quality & Purity Testing System",
    "category": "AgriTech",
    "keywords": [
      "water quality",
      "tds",
      "ph",
      "purity",
      "drinking water",
      "water contamination",
      "potable water"
    ],
    "principle": "The TDS probe measures total dissolved solids through electrical conductivity between titanium pins, while the pH electrode measures hydrogen ion potential against a reference standard. The Arduino computes PPM and pH ratings, presenting potable quality metrics on the 16x2 LCD.",
    "reasoning": "Direct dual analog sensing with industrial TDS and pH probes gives comprehensive water chemical purity analysis with real-time audio-visual alarms.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "TDS SENSOR",
        "qty": 1
      },
      {
        "name": "PH SENSOR",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "IoT Smart Weather & Environmental Station",
    "category": "AgriTech",
    "keywords": [
      "weather",
      "environment",
      "climate",
      "temperature",
      "humidity",
      "dht11",
      "esp32",
      "barometer",
      "weather station"
    ],
    "principle": "The DHT11 capacitive humidity sensor and NTC thermistor capture ambient temperature and humidity data. The ESP32 microcontroller processes these signals, renders real-time graphical metrics onto the 0.96-inch OLED display, and transmits data telemetry to a cloud dashboard over Wi-Fi.",
    "reasoning": "ESP32 integrates high-performance 2.4GHz Wi-Fi for cloud synchronization, driving an ultra-crisp I2C OLED display for field data visualization.",
    "components": [
      {
        "name": "ESP32",
        "qty": 1
      },
      {
        "name": "DHT11",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      }
    ]
  },
  {
    "title": "Air Quality Monitoring & AQI Station",
    "category": "AgriTech",
    "keywords": [
      "air quality",
      "aqi",
      "pollution",
      "mq2",
      "smoke",
      "dht11",
      "air pollution",
      "gas index"
    ],
    "principle": "Utilizes the MQ-2 electrochemical gas sensor to measure suspended combustible particulates and smoke density alongside the DHT11 sensor for atmospheric humidity. The Arduino computes an index of environmental quality, sounding a buzzer if toxicity exceeds safe limits.",
    "reasoning": "MQ-2 metal oxide gas sensor provides rapid response to atmospheric impurities, paired with LCD 16x2 for live PPM telemetry.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "MQ2 SMOKE/GAS SENSOR",
        "qty": 1
      },
      {
        "name": "DHT11",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Forest Fire & Wildfire Smoke Detection Warning",
    "category": "AgriTech",
    "keywords": [
      "forest fire",
      "wildfire",
      "fire detection",
      "smoke alert",
      "temperature spike",
      "sim800l",
      "outdoor fire"
    ],
    "principle": "Dual detection system using the MQ-2 smoke detector and LM35 analog temperature sensor to detect sudden combustion thermal spikes in remote forestry zones. The Arduino validates fire signatures and triggers the SIM800L module to broadcast emergency alert SMS messages with GPS coordinates.",
    "reasoning": "Combines thermal spike verification with electrochemical smoke detection and cellular GSM emergency dispatch for off-grid safety.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "MQ2 SMOKE/GAS SENSOR",
        "qty": 1
      },
      {
        "name": "TEMP SENSOR LM35",
        "qty": 1
      },
      {
        "name": "SIM800L",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Solar Powered Drip Irrigation System",
    "category": "AgriTech",
    "keywords": [
      "solar irrigation",
      "drip irrigation",
      "solar pump",
      "solar agriculture",
      "green energy farm"
    ],
    "principle": "Monitors solar battery bus voltage with the DC voltage sensor while reading agricultural soil moisture. The Arduino activates low-power drip irrigation cycles via relay when moisture is depleted and solar battery storage is above operating thresholds.",
    "reasoning": "Arduino Nano provides energy-efficient micro-controller logic, coordinating soil moisture triggers with battery voltage monitoring.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "SOIL MOISOR SENSOR (WET)",
        "qty": 1
      },
      {
        "name": "DC VOLTMETER VOLT SENSOR",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "WATER MOTOR",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Aquaculture & Fish Pond Water Quality Monitor",
    "category": "AgriTech",
    "keywords": [
      "aquaculture",
      "fish pond",
      "aquarium",
      "water ph",
      "tds purity",
      "fish farming"
    ],
    "principle": "Continuously tracks pH levels and total dissolved minerals in aquaculture tanks to safeguard aquatic life. The ESP8266 samples the analog sensors, flags dangerous chemical spikes on the 16x2 LCD, and triggers aerator pumps via 5V relay if conditions deviate.",
    "reasoning": "ESP8266 adds low-cost IoT capabilities to continuous underwater pH and mineral conductivity probing.",
    "components": [
      {
        "name": "ESP8266",
        "qty": 1
      },
      {
        "name": "PH SENSOR",
        "qty": 1
      },
      {
        "name": "TDS SENSOR",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Obstacle Avoiding Robot / Autonomous Rover",
    "category": "Robotics",
    "keywords": [
      "obstacle",
      "avoiding",
      "robot",
      "rover",
      "car",
      "ultrasonic",
      "collision",
      "autonomous vehicle"
    ],
    "principle": "The ultrasonic sensor emits high-frequency sound wave pulses and measures echo reflection time to calculate obstacle distance. If an object is detected within range, the Arduino halts forward movement, rotates the servo-mounted sensor to find a clear path, and steers the robot away from collisions.",
    "reasoning": "Arduino Uno directs ultrasonic acoustic echo scanning and rotates the SG90 servo motor to locate obstacle-free pathways.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "ULTRASONIC SENSOR",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      }
    ]
  },
  {
    "title": "Line Follower Robot with Dual IR Proximity Sensors",
    "category": "Robotics",
    "keywords": [
      "line follower",
      "line tracking",
      "black line",
      "white surface",
      "infrared robot",
      "path follower"
    ],
    "principle": "Twin infrared sensors oriented downwards continuously detect contrast between black guidance tracks and high-reflectance floors. The Arduino evaluates differential analog/digital thresholds from left and right sensors, driving steering adjustments via motors to follow the path accurately.",
    "reasoning": "Dual IR sensors deliver fast optical edge tracking, enabling the compact Arduino Nano to adjust navigation vectors in real-time.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "IR SENSOR",
        "qty": 2
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Fire Fighting Robot with Smoke & Water Extinguisher",
    "category": "Robotics",
    "keywords": [
      "fire fighting",
      "fire",
      "smoke",
      "extinguisher",
      "flame",
      "safety robot",
      "water cannon robot"
    ],
    "principle": "Detects combustion fumes using the MQ-2 sensor. When hazard levels are sensed, the Arduino positions a water nozzle using a servo motor and energizes the relay-driven water pump to extinguish localized flames autonomously.",
    "reasoning": "Combines MQ-2 chemical combustion sensing with SG90 servo directional nozzle aiming and 5V relay water pumping.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "MQ2 SMOKE/GAS SENSOR",
        "qty": 1
      },
      {
        "name": "WATER MOTOR",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Industrial Automated Color Sorting Conveyor",
    "category": "Robotics",
    "keywords": [
      "color",
      "sorting",
      "conveyor",
      "tcs3200",
      "industrial",
      "color sorting",
      "rgb sensor"
    ],
    "principle": "The TCS3200 sensor focuses reflected light onto an 8x8 array of filtered photodiodes, producing a square wave whose frequency is directly proportional to Red, Green, and Blue light intensity. The Arduino evaluates the RGB signature and commands dual servo gates to divert colored objects into designated sorting bins.",
    "reasoning": "Precision RGB optical color recognition driving dual SG90 servo diverter arms for industrial automation packaging.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "COLOUR SENSOR YCS3200",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 2
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Gesture Controlled Robot using MPU6050 Accelerometer",
    "category": "Robotics",
    "keywords": [
      "gesture",
      "accelerometer",
      "mpu6050",
      "hand gesture",
      "glove robot",
      "tilt control",
      "motion control"
    ],
    "principle": "The MPU6050 6-axis gyroscope and accelerometer captures hand pitch and roll angles in real-time. The Arduino translates hand tilt into proportional direction commands, driving servo steerings and motor drives to mirror user movements.",
    "reasoning": "MPU6050 I2C 6-DOF MEMS sensor captures micro-degree pitch/roll variations for intuitive hand-motion robot navigation.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "MPU6050",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Inductive Metal Detector Robot",
    "category": "Robotics",
    "keywords": [
      "metal detector",
      "metal",
      "inductive",
      "landmine",
      "scanner",
      "mine detection",
      "buried wire"
    ],
    "principle": "Uses electromagnetic induction in an inductive coil to detect eddy currents induced in conductive metals. When metallic objects are located, the resonant frequency alters, which the Arduino detects to trigger an acoustic buzzer alert and display target proximity on the LCD.",
    "reasoning": "Dedicated metal inductive transducer with real-time audio chime alert and LCD readout for UXO/pipeline tracing.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "METAL SENSOR",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Ultrasonic 180-Degree Radar & Sonar Scanner",
    "category": "Robotics",
    "keywords": [
      "radar",
      "sonar",
      "ultrasonic scanner",
      "servo sweep",
      "mapping",
      "distance scanner",
      "sweep sonar"
    ],
    "principle": "The ultrasonic sensor is mounted atop an SG90 servo motor that sweeps mechanically from 0 to 180 degrees. At each angular step, distance pulses are measured and forwarded to a microcontroller or PC visualizer to render an interactive radar sweep screen.",
    "reasoning": "Combines SG90 servo angular indexing with ultrasonic time-of-flight acoustic sensing for 180-degree radar mapping.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "ULTRASONIC SENSOR",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Bluetooth & WiFi Teleoperated Rover using ESP32",
    "category": "Robotics",
    "keywords": [
      "esp32 rover",
      "wifi robot",
      "bluetooth car",
      "rc car",
      "smartphone controlled",
      "wireless robot"
    ],
    "principle": "The ESP32 creates a local Wi-Fi Access Point or Bluetooth Serial link. A smartphone application transmits directional joystick packets to control motor relays and steering servos, showing real-time diagnostic telemetry on an onboard 0.96 OLED screen.",
    "reasoning": "ESP32 dual wireless stack (Wi-Fi + BLE) allows zero-latency smartphone remote control with rich OLED telemetry.",
    "components": [
      {
        "name": "ESP32",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Self-Balancing Two-Wheeled Inverted Pendulum Robot",
    "category": "Robotics",
    "keywords": [
      "self balancing",
      "inverted pendulum",
      "two wheeled robot",
      "segway robot",
      "pid balance"
    ],
    "principle": "An MPU6050 6-axis IMU reads tilt angles and angular velocity 100 times per second. A digital PID loop running on the Arduino calculates corrective motor PWM pulses to counteract gravitational lean, maintaining vertical equilibrium dynamically.",
    "reasoning": "Fast I2C DMP readings from MPU6050 feed a closed-loop PID algorithm implemented on an Arduino Uno.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "MPU6050",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      },
      {
        "name": "MIX RESISTOR BOX",
        "qty": 1
      }
    ]
  },
  {
    "title": "Human Rescue & Disaster Site Search Rover",
    "category": "Robotics",
    "keywords": [
      "rescue robot",
      "disaster rover",
      "earthquake rescue",
      "thermal search",
      "mlx90614",
      "survivor search"
    ],
    "principle": "Designed to explore rubble and collapsed buildings. The rover uses an MLX90614 contactless infrared temperature sensor to detect body heat of survivors while ultrasonic sensors guide autonomous traversal through narrow debris channels.",
    "reasoning": "Non-contact medical-grade infrared optical temperature reading coupled with acoustic navigation for search-and-rescue.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "MLX90614 TEMP SENSOR",
        "qty": 1
      },
      {
        "name": "ULTRASONIC SENSOR",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Robotic Arm Gripper with Servo Control",
    "category": "Robotics",
    "keywords": [
      "robotic arm",
      "gripper",
      "pick and place",
      "servo arm",
      "potentiometer control",
      "manipulator"
    ],
    "principle": "Multi-axis articulation system where SG90 servo motors actuate base rotation, shoulder elevation, and end-effector jaw clamping. Pushbuttons or analog dials send positioning inputs to the Arduino, which generates calibrated pulse widths to maneuver payloads smoothly.",
    "reasoning": "Multiple SG90 servo channels driven by Arduino Uno with pushbuttons for manual or programmed robotic kinematics.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 2
      },
      {
        "name": "PUSHBUTTON",
        "qty": 2
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "IoT Patient Vital Health Monitoring System",
    "category": "Healthcare",
    "keywords": [
      "health",
      "patient",
      "heart",
      "pulse",
      "spo2",
      "vital",
      "medical",
      "max30102",
      "health monitor"
    ],
    "principle": "Uses dual-wavelength photoplethysmography (PPG) with red and infrared LEDs in the MAX30102 sensor to calculate blood oxygen saturation (SpO2) and pulse rate. The MLX90614 reads non-contact optical infrared radiation for body temperature, streaming vitals to doctors over IoT.",
    "reasoning": "ESP32 collects high-precision PPG heart/SpO2 readings alongside optical thermal sensing, showing data on OLED and syncing to IoT cloud.",
    "components": [
      {
        "name": "ESP32",
        "qty": 1
      },
      {
        "name": "MAX30102 PULSE",
        "qty": 1
      },
      {
        "name": "MLX90614 TEMP SENSOR",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Touchless Automatic Hand Sanitizer & Temperature Scanner",
    "category": "Healthcare",
    "keywords": [
      "sanitizer",
      "touchless",
      "dispenser",
      "contactless",
      "temperature scanner",
      "hygiene",
      "fever scan"
    ],
    "principle": "An infrared proximity sensor detects when a hand is placed under the dispenser nozzle. The Arduino drives the mini water pump for a calibrated pulse to spray disinfectant, while the MLX90614 non-contact infrared sensor reads forehead/palm temperature, triggering the buzzer on fever readings.",
    "reasoning": "Combines IR optical proximity sensing with medical-grade MLX90614 contactless pyrometer and a relay-switched disinfectant pump.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "IR SENSOR",
        "qty": 1
      },
      {
        "name": "MLX90614 TEMP SENSOR",
        "qty": 1
      },
      {
        "name": "WATER MOTOR",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "BUZZER 12MM",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Blind Walking Assistance Stick",
    "category": "Healthcare",
    "keywords": [
      "blind",
      "walking stick",
      "cane",
      "visually impaired",
      "assistance",
      "third eye",
      "obstacle cane"
    ],
    "principle": "An ultrasonic transducer mounted at the cane's tip transmits high-frequency acoustic pulses to scan for ground and knee-level obstacles. The Arduino computes target proximity; as obstacles come closer, it increases buzzer beep frequency to provide real-time acoustic navigation cues.",
    "reasoning": "Ultra-compact Arduino Nano powers an ergonomic ultrasonic echo transducer with progressive frequency acoustic beeper for blind navigation.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "ULTRASONIC SENSOR",
        "qty": 1
      },
      {
        "name": "BUZZER 12MM",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Fall Detection & Elderly Motion Alert System",
    "category": "Healthcare",
    "keywords": [
      "fall detection",
      "elderly",
      "motion",
      "accident alert",
      "mpu6050",
      "accelerometer",
      "elder care"
    ],
    "principle": "The MPU6050 MEMS sensor continuously measures tri-axial acceleration and rotational velocity. An algorithm recognizes rapid free-fall drops followed by severe impact force and prolonged zero-movement states, immediately sounding an audible alert and sending emergency GPS/SMS alerts to family members.",
    "reasoning": "MPU6050 accelerometer impact signature recognition paired with SIM800L GSM cellular SMS dispatch for rapid emergency care.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "MPU6050",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "SIM800L",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Contactless Infrared Forehead Thermometer Gun",
    "category": "Healthcare",
    "keywords": [
      "thermometer gun",
      "forehead thermometer",
      "mlx90614",
      "fever check",
      "non contact temp",
      "medical gun"
    ],
    "principle": "Measures emitted thermal infrared radiation from human forehead skin using the MLX90614 thermopile sensor. The microcontroller processes optical Stefan-Boltzmann radiation curves to display accurate temperature (C/F) on an OLED screen, chirping the buzzer on fever thresholds.",
    "reasoning": "MLX90614 calibrated medical infrared sensor provides 0.1C resolution, instantly rendered onto a fast 0.96 OLED screen.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "MLX90614 TEMP SENSOR",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "PUSHBUTTON",
        "qty": 1
      },
      {
        "name": "BUZZER 12MM",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Digital Heart Rate & SpO2 Blood Oxygen Pulse Oximeter",
    "category": "Healthcare",
    "keywords": [
      "oximeter",
      "pulse oximeter",
      "heart rate",
      "spo2",
      "blood oxygen",
      "max30102",
      "bpm counter"
    ],
    "principle": "The MAX30102 shines alternate 660nm red and 880nm infrared light through the fingertip capillary bed. By calculating AC/DC pulsatile absorption ratios, the Arduino computes oxygenated versus deoxygenated hemoglobin ratios and instant beats-per-minute (BPM).",
    "reasoning": "MAX30102 integrated optical pulse oximetry IC connected via I2C to Arduino Uno with crystal clear LCD 16x2 vital statistics.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "MAX30102 PULSE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Medicine Reminder & Automated Pill Dispenser",
    "category": "Healthcare",
    "keywords": [
      "medicine reminder",
      "pill dispenser",
      "pill box",
      "elderly medication",
      "audio medicine",
      "dfplayer pill"
    ],
    "principle": "An automated medication dispenser with internal real-time scheduling. When dosage time arrives, the DFPlayer Mini announces audio instructions (e.g. 'Please take your morning tablet'), while the SG90 servo rotates a compartmentalized carousel to release pills into a dispensing tray.",
    "reasoning": "DFPlayer Mini provides reassuring spoken audio reminders while an SG90 servo rotates the compartmentalized pill wheel.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "DF PLAYER MINI",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "PUSHBUTTON",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Baby Cradle with Acoustic Alert & Auto Rocking",
    "category": "Healthcare",
    "keywords": [
      "baby cradle",
      "smart cradle",
      "crib",
      "baby monitor",
      "auto rocking",
      "soothing music"
    ],
    "principle": "Detects baby crying using an acoustic trigger or vibration sensor. The Arduino commands an SG90 servo linkage to gently rock the cradle back and forth while commanding the DFPlayer Mini module to softly play soothing lullabies through the speaker.",
    "reasoning": "Combines SG90 mechanical rocking linkage with DFPlayer Mini audio lullaby playback for hands-free nursery care.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "DF PLAYER MINI",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Posture Correction & Slouch Detection Alert Wearable",
    "category": "Healthcare",
    "keywords": [
      "posture",
      "slouch",
      "spine posture",
      "ergonomic",
      "wearable health",
      "neck tilt alert"
    ],
    "principle": "An MPU6050 accelerometer clipped to the upper spine or shirt collar monitors spine inclination. When the wearer slumps forward past an ergonomic angle for longer than 3 seconds, the Arduino Nano triggers subtle buzzer pulses to remind the user to straighten up.",
    "reasoning": "Compact lightweight Arduino Nano and MPU6050 fit comfortably in a wearable harness for real-time postural ergonomics.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "MPU6050",
        "qty": 1
      },
      {
        "name": "BUZZER 12MM",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      }
    ]
  },
  {
    "title": "RFID Based Attendance & Smart Door Lock Access",
    "category": "Security",
    "keywords": [
      "rfid",
      "attendance",
      "door lock",
      "access",
      "rc522",
      "security",
      "gate",
      "smart card"
    ],
    "principle": "The RC522 RFID reader transmits a 13.56 MHz electromagnetic field that powers passive RFID tags. The tag modulates its unique UID back to the reader via SPI. The microcontroller validates the UID against stored authorization tables; on approval, it actuates the servo lock latch and chimes the buzzer.",
    "reasoning": "RC522 13.56MHz SPI RFID reader matched with an SG90 servo lock latch and 16x2 LCD for staff ID verification.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "RFID RC522",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Digital Security Keypad Password Door Lock",
    "category": "Security",
    "keywords": [
      "keypad",
      "password",
      "pin",
      "lock",
      "security safe",
      "door lock",
      "matrix keypad"
    ],
    "principle": "The 4x4 matrix keypad is scanned row-by-column to read 4-digit user PIN entries. The Arduino compares the entered PIN with stored credentials in EEPROM; if valid, it drives the servo motor to unlock the latch mechanism. After three consecutive invalid attempts, it locks the system and sounds the alarm.",
    "reasoning": "Matrix 4x4 keypad row-column scanning with secure EEPROM passcode verification and SG90 locking mechanism.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "KEYPAD 4X4",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Gas Leakage & Smoke Detection System with Alert",
    "category": "Security",
    "keywords": [
      "gas",
      "smoke",
      "mq2",
      "leak",
      "fire",
      "lpg",
      "toxic",
      "methane",
      "gas alarm"
    ],
    "principle": "The MQ-2 sensor utilizes a SnO2 sensitive layer whose electrical conductivity increases when exposed to combustible gases like LPG, smoke, and methane. The Arduino samples the analog voltage; when threshold is breached, it sounds an acoustic buzzer alarm and flashes safety alerts on the 16x2 LCD.",
    "reasoning": "High-sensitivity MQ-2 gas detection triggering instant high-decibel acoustic buzzer siren and visual LCD emergency cues.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "MQ2 SMOKE/GAS SENSOR",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Laser & Infrared Security Tripwire Intruder Alarm",
    "category": "Security",
    "keywords": [
      "tripwire",
      "laser alarm",
      "infrared perimeter",
      "intruder alarm",
      "burglar alarm",
      "boundary security"
    ],
    "principle": "An optical tripwire beam is focused onto an IR sensor or photodetector. When an intruder breaks the invisible beam, the rapid voltage drop is detected by the Arduino within milliseconds, which latches a 5V relay to trigger high-intensity sirens and strobe lights.",
    "reasoning": "Optical beam disruption sensing with instantaneous hardware relay latching for industrial boundary alarm systems.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "IR SENSOR",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Biometric Smart Security Locker System",
    "category": "Security",
    "keywords": [
      "locker",
      "safe",
      "rfid safe",
      "keypad safe",
      "security vault",
      "dual auth safe"
    ],
    "principle": "Dual-factor authentication system requiring both an authorized RFID smart card tap and a 4-digit matrix keypad PIN. Once both verification tokens match internal credentials, the Arduino commands the SG90 servo to retract the mechanical safe bolt.",
    "reasoning": "Combines 13.56MHz RFID credential checking with 4x4 matrix passcode entry for two-factor vault security.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "RFID RC522",
        "qty": 1
      },
      {
        "name": "KEYPAD 4X4",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Anti-Theft GPS & GSM Luggage & Bag Tracker",
    "category": "Security",
    "keywords": [
      "luggage tracker",
      "anti theft",
      "bag tracking",
      "gps sim800l",
      "geo fencing",
      "asset tracking"
    ],
    "principle": "The NEO-6M GPS receiver fetches global orbital satellite coordinates to compute longitude and latitude. The MPU6050 accelerometer senses unauthorized tampering or bag snatching, triggering the SIM800L module to dispatch an SMS alert with a Google Maps URL.",
    "reasoning": "Combines satellite positioning (NEO-6M), motion disturbance sensing (MPU6050), and GSM cellular communications.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "GPS MODULE NEO 6M",
        "qty": 1
      },
      {
        "name": "SIM800L",
        "qty": 1
      },
      {
        "name": "MPU6050",
        "qty": 1
      },
      {
        "name": "BUZZER 12MM",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Vehicle Anti-Theft Engine Ignition Lock",
    "category": "Security",
    "keywords": [
      "engine lock",
      "anti theft vehicle",
      "rfid ignition",
      "car immobilizer",
      "smart bike lock"
    ],
    "principle": "An immobilizer where the vehicle starter ignition is isolated through a 5V relay. The driver must tap an authorized RFID tag onto the dashboard RC522 reader. If recognized, the relay arms the starter; invalid attempts chime the alarm and notify the owner over SMS.",
    "reasoning": "Isolates the vehicle ignition relay until authenticated RFID UID handshake occurs, backed by SIM800L alert capability.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "RFID RC522",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "SIM800L",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Electronic Voting Machine (EVM) with LCD & Keypad",
    "category": "Security",
    "keywords": [
      "voting machine",
      "evm",
      "election",
      "tamper proof ballot",
      "secure voting"
    ],
    "principle": "A digital voting machine where voters select candidate choices via pushbuttons or a keypad. The Arduino calculates tally counts in protected memory, displays confirmation on the 16x2 LCD, and buzzes a confirmation tone while preventing duplicate ballots.",
    "reasoning": "Dedicated logic voting terminal using Arduino Uno, verified button/keypad input matrices, and secure audit tally storage.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "KEYPAD 4X4",
        "qty": 1
      },
      {
        "name": "PUSHBUTTON",
        "qty": 2
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Density Based Smart Traffic Light Controller",
    "category": "Smart City",
    "keywords": [
      "traffic light",
      "density traffic",
      "smart intersection",
      "congestion control",
      "traffic signal"
    ],
    "principle": "Infrared optical sensors installed along junction approach lanes measure traffic buildup queue lengths. The Arduino dynamically computes vehicle density and allocates longer green light signal times to heavily congested lanes while minimizing idle red light delays.",
    "reasoning": "Multiple IR proximity sensors deliver lane occupancy data to an adaptive traffic cycle timing state machine on Arduino Uno.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "IR SENSOR",
        "qty": 2
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "MIX RESISTOR BOX",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Automatic Toll Plaza Gate System with RFID",
    "category": "Smart City",
    "keywords": [
      "toll plaza",
      "fastag",
      "toll gate",
      "rfid toll",
      "electronic toll",
      "automated barrier"
    ],
    "principle": "Vehicles equipped with RFID windshield tags approach the toll booth. The RC522 module reads the vehicle tag UID, deducts toll fees from stored account balances, displays vehicle details on the LCD, and commands the SG90 servo barrier arm to lift open automatically.",
    "reasoning": "Automates highway toll booths by uniting RFID RC522 scanning, SG90 servo boom barrier actuation, and LCD billing updates.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "RFID RC522",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Parking Space & Slot Vacancy Indicator",
    "category": "Smart City",
    "keywords": [
      "parking",
      "smart parking",
      "parking slot",
      "car park",
      "slot indicator",
      "parking barrier"
    ],
    "principle": "Infrared proximity sensors monitor each parking bay to detect vehicle presence. The Arduino tallies available parking spots in real-time, displays open slot numbers on the 16x2 LCD at the garage entrance, and controls an entrance servo barrier gate.",
    "reasoning": "Dual IR sensors provide real-time occupancy detection per bay, linked to an entry SG90 servo gate and status LCD.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "IR SENSOR",
        "qty": 2
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Automatic Railway Gate Crossing with Acoustic Warning",
    "category": "Smart City",
    "keywords": [
      "railway gate",
      "rail crossing",
      "train detector",
      "automatic crossing",
      "railway safety"
    ],
    "principle": "Tracks approaching trains using dual IR sensors placed upstream on tracks. When a train is detected approaching, the Arduino immediately sounds warning bells via the buzzer module and lowers the servo barrier gates to block road traffic until the train has cleared.",
    "reasoning": "Trackside IR beam detection triggers fail-safe servo crossing gate closure and loud acoustic warning chimes.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "IR SENSOR",
        "qty": 2
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "GPS & GSM Vehicle Tracking and Accident Alert",
    "category": "Smart City",
    "keywords": [
      "gps",
      "gsm",
      "vehicle",
      "tracking",
      "accident",
      "sim800l",
      "alert",
      "car tracking",
      "crash alert"
    ],
    "principle": "The MPU6050 6-axis accelerometer monitors sudden impact shocks and vehicle rollover tilt. Upon collision detection, the NEO-6M GPS acquires real-time latitude/longitude coordinates, and the SIM800L module automatically sends an emergency SMS with Google Maps coordinates to responders.",
    "reasoning": "Combines MPU6050 crash G-force shock detection with NEO-6M satellite coordinate logging and SIM800L GSM cellular SMS dispatch.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "GPS MODULE NEO 6M",
        "qty": 1
      },
      {
        "name": "SIM800L",
        "qty": 1
      },
      {
        "name": "MPU6050",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Automatic Street Light & Smart Lighting Controller",
    "category": "Smart City",
    "keywords": [
      "street light",
      "lighting",
      "ldr",
      "smart light",
      "energy saving",
      "dusk to dawn",
      "motion light"
    ],
    "principle": "Senses ambient luminance transitions and motion of oncoming vehicles or pedestrians using IR sensors. The Arduino switches high-power illumination lamps via a 5V relay only when dusk and movement are detected, dimming or turning off during inactive hours to save electricity.",
    "reasoning": "IR optical proximity sensor coordinates with 5V relay switching for high-efficiency dusk-to-dawn municipal lighting.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "IR SENSOR",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "MIX RESISTOR BOX",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Home Automation using ESP8266 & Wi-Fi",
    "category": "Smart City",
    "keywords": [
      "home automation",
      "esp8266",
      "wifi",
      "smart home",
      "appliances",
      "iot relay",
      "wifi switch"
    ],
    "principle": "The ESP8266 hosts an embedded lightweight HTTP web server connected to local Wi-Fi. Users can access a dashboard from any browser/smartphone to toggle relays controlling home AC appliances, with live status updates reflected on the LCD screen.",
    "reasoning": "ESP8266 provides built-in Wi-Fi micro-webserver to control multiple AC appliance channels via 5V relays.",
    "components": [
      {
        "name": "ESP8266",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Voice-Controlled Home Automation with DFPlayer",
    "category": "Smart City",
    "keywords": [
      "voice control",
      "dfplayer smart home",
      "talking appliances",
      "audio feedback home",
      "voice prompt relay"
    ],
    "principle": "Integrates pushbuttons or serial voice command modules with the DFPlayer Mini. When an appliance state transitions, the microcontroller switches the 5V relay and broadcasts clear voice announcements (e.g. 'Living Room Fan Turned On') for enhanced accessibility.",
    "reasoning": "DFPlayer Mini provides high-fidelity spoken confirmation cues whenever appliances are energized through the 5V relay.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "DF PLAYER MINI",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "PUSHBUTTON",
        "qty": 2
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Dustbin with Ultrasonic Proximity & Servo Lid",
    "category": "Smart City",
    "keywords": [
      "smart dustbin",
      "trash can",
      "touchless dustbin",
      "automatic dustbin",
      "servo bin",
      "ultrasonic dustbin"
    ],
    "principle": "An ultrasonic sensor mounted on the dustbin rim scans for hand or trash proximity within 25 cm. When detected, the Arduino smoothly drives the SG90 micro servo motor to 90 degrees to open the lid touchlessly, holds it open for 5 seconds, and gently closes it.",
    "reasoning": "Ultrasonic distance sensing triggers an SG90 servo motor for hygienic, hands-free waste disposal.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "ULTRASONIC SENSOR",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      },
      {
        "name": "BREADBOARD",
        "qty": 1
      }
    ]
  },
  {
    "title": "Vehicle Over-Speed Detection & Radar System",
    "category": "Smart City",
    "keywords": [
      "over speed",
      "speed radar",
      "speed detector",
      "speed trap",
      "traffic speed",
      "velocity check"
    ],
    "principle": "Uses dual infrared or ultrasonic sensors spaced at a calibrated distance. The Arduino measures transit time between sensors to calculate vehicle velocity (km/h). If speed limits are breached, it triggers a buzzer alarm and logs the violation on the 16x2 LCD.",
    "reasoning": "Precision microsecond timer interrupts between dual IR sensors calculate instantaneous velocity with buzzer warning.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "IR SENSOR",
        "qty": 2
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Digital Energy Meter with Overload Circuit Breaker",
    "category": "Power",
    "keywords": [
      "energy meter",
      "current",
      "voltage",
      "power",
      "acs712",
      "overload",
      "electricity",
      "wattmeter"
    ],
    "principle": "The ACS712 Hall-effect transducer senses load current and the voltage sensor measures voltage drop across a precision divider. The microcontroller calculates instant power (W) and cumulative energy consumption (kWh). If current exceeds safe limits, the 5V relay disconnects the circuit instantly.",
    "reasoning": "ACS712 20A Hall-effect current sensing paired with DC voltage sensing and high-speed relay safety disconnection.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "ACS712 20A CURRENT SENSOR",
        "qty": 1
      },
      {
        "name": "DC VOLTMETER VOLT SENSOR",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Dual-Axis Solar Tracking System using Servo & Sensors",
    "category": "Power",
    "keywords": [
      "solar tracker",
      "sun tracking",
      "dual axis",
      "solar panel",
      "ldr tracking",
      "photovoltaic efficiency"
    ],
    "principle": "Light sensors compare differential solar intensity across azimuth and elevation quadrants. The Arduino processes sunlight gradients to drive dual SG90 servo motors, continuously tilting the photovoltaic panel perpendicular to the sun's rays to harvest up to 35% more power.",
    "reasoning": "Dual SG90 servos provide pan-and-tilt orienting driven by analog light-gradient calculations on Arduino Uno.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "SERVO MOTOR SG90",
        "qty": 2
      },
      {
        "name": "MIX RESISTOR BOX",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Solar Battery Voltage & Charge Level Monitor",
    "category": "Power",
    "keywords": [
      "battery monitor",
      "solar battery",
      "voltage monitor",
      "charge controller",
      "lead acid",
      "lithium monitor"
    ],
    "principle": "Uses the DC voltage sensor module with precision resistor dividers to monitor 12V/24V solar storage banks. The Arduino maps voltages to State of Charge (SoC) percentages on the OLED 0.96 display, disconnecting loads via relay if deep-discharge levels are reached.",
    "reasoning": "Precision analog DC voltage sampling paired with OLED 0.96 visual battery gauges and 5V relay undervoltage protection.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "DC VOLTMETER VOLT SENSOR",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Electric Vehicle (EV) Battery Health Monitor",
    "category": "Power",
    "keywords": [
      "ev battery",
      "battery health",
      "current sensor",
      "acs712",
      "ev charger",
      "coulomb counter"
    ],
    "principle": "Monitors EV powertrain battery current draw with the ACS712 sensor alongside terminal voltage with the DC voltage sensor. The ESP32 calculates real-time power discharge rates, battery health metrics, and sends telemetry to mobile devices over Wi-Fi.",
    "reasoning": "ESP32 high-resolution ADC sampling voltage and ACS712 current for high-accuracy Coulomb counting and power analytics.",
    "components": [
      {
        "name": "ESP32",
        "qty": 1
      },
      {
        "name": "ACS712 20A CURRENT SENSOR",
        "qty": 1
      },
      {
        "name": "DC VOLTMETER VOLT SENSOR",
        "qty": 1
      },
      {
        "name": "OLED 0.96",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "LoRa Long-Range Wireless Sensor Node for Agriculture",
    "category": "Power",
    "keywords": [
      "lora",
      "wireless",
      "long range",
      "sx1278",
      "telemetry",
      "farm lora",
      "remote sensor node"
    ],
    "principle": "Gathers microclimate temperature, relative humidity, and soil moisture metrics across sprawling agricultural acreage. The Arduino Nano formats data into encrypted packets and broadcasts them via 433 MHz Chirp Spread Spectrum (CSS) LoRa modulation over kilometers to a central receiver gateway.",
    "reasoning": "Chirp Spread Spectrum SX1278 LoRa transceiver with SMA antenna and logic shifter allows kilometer-range field telemetry.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "LORA RA02 (SX1278)",
        "qty": 1
      },
      {
        "name": "ANTENNA",
        "qty": 1
      },
      {
        "name": "SMA150MM",
        "qty": 1
      },
      {
        "name": "DHT11",
        "qty": 1
      },
      {
        "name": "SOIL MOISOR SENSOR (WET)",
        "qty": 1
      },
      {
        "name": "3.3V 5V LOGIC LEVEL CONVERTOR",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Long Distance Remote Telemetry Link (LoRa SX1278)",
    "category": "Power",
    "keywords": [
      "long distance telemetry",
      "lora link",
      "remote node",
      "sx1278 data link",
      "sub ghz wireless"
    ],
    "principle": "Transmits point-to-point remote telemetry across mountains or industrial complexes without cellular subscriptions. Employs the SX1278 LoRa module operating at 433 MHz with an external SMA antenna, interfacing with Arduino Nano via SPI through a 3.3V-5V bi-directional level converter.",
    "reasoning": "Dedicated long-range RF pipeline matching RA-02 LoRa transceiver, antenna matching cable, and voltage logic translation.",
    "components": [
      {
        "name": "Arduino Nano",
        "qty": 1
      },
      {
        "name": "LORA RA02 (SX1278)",
        "qty": 1
      },
      {
        "name": "ANTENNA",
        "qty": 1
      },
      {
        "name": "SMA150MM",
        "qty": 1
      },
      {
        "name": "3.3V 5V LOGIC LEVEL CONVERTOR",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Smart Audio Announcer & Voice Prompt Player",
    "category": "Power",
    "keywords": [
      "audio",
      "voice",
      "announcer",
      "dfplayer",
      "sound",
      "mp3",
      "speech",
      "talking system"
    ],
    "principle": "Integrates a hardware MP3/WAV decoding module with on-board micro-SD storage. When pushbutton triggers or external inputs occur, the Arduino sends asynchronous serial UART commands to the DFPlayer Mini to broadcast corresponding high-fidelity voice announcements or accessibility messages.",
    "reasoning": "DFPlayer Mini provides hardware audio decoding controlled via software UART from Arduino Uno with pushbuttons.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "DF PLAYER MINI",
        "qty": 1
      },
      {
        "name": "PUSHBUTTON",
        "qty": 2
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Temperature Controlled DC Cooling Fan System",
    "category": "Power",
    "keywords": [
      "temperature fan",
      "cooling fan",
      "thermal fan",
      "lm35 fan",
      "fan controller",
      "heat sink cooler"
    ],
    "principle": "The LM35 precision temperature sensor outputs a linear 10mV/C analog voltage. When operating temperatures breach user-set safety thresholds, the Arduino switches a high-current IRFZ44N MOSFET or 5V relay to activate cooling fans, displaying live temperatures on the LCD.",
    "reasoning": "Linear analog thermal sensing with LM35 driving high-current IRFZ44N transistor switching for efficient fan thermal management.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "TEMP SENSOR LM35",
        "qty": 1
      },
      {
        "name": "TRANSISTOR IRFFZ44NPBF",
        "qty": 1
      },
      {
        "name": "5V RELAY MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Decibel Sound Level Warning Meter for Industrial Zones",
    "category": "Power",
    "keywords": [
      "decibel meter",
      "sound meter",
      "noise monitor",
      "audio warning",
      "noise pollution meter"
    ],
    "principle": "Samples acoustic sound pressure levels in manufacturing or study areas. When ambient noise levels cross hazardous decibel thresholds, the Arduino triggers an escalating alert buzzer and renders sound intensity bar-graphs on the 16x2 LCD screen.",
    "reasoning": "Acoustic audio monitoring with real-time analog sampling on Arduino Uno, alerting operators through buzzer and LCD.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "MIX RESISTOR BOX",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  },
  {
    "title": "Wireless Notice Board via GSM SMS",
    "category": "Power",
    "keywords": [
      "wireless notice board",
      "gsm notice board",
      "sms display",
      "scrolling notice board",
      "sim800l display"
    ],
    "principle": "Authorized administrators transmit text messages to the SIM800L cellular receiver. The Arduino parses the incoming SMS payload and refreshes the message text onto the 16x2 LCD display, eliminating the need to physically print or update notice sheets.",
    "reasoning": "SIM800L cellular serial AT modem decodes incoming SMS messages and instantly posts updates to an LCD 16x2 screen.",
    "components": [
      {
        "name": "Arduino uno",
        "qty": 1
      },
      {
        "name": "SIM800L",
        "qty": 1
      },
      {
        "name": "LCD 16X2",
        "qty": 1
      },
      {
        "name": "BUZZER MODULE",
        "qty": 1
      },
      {
        "name": "JUMPER WIRE",
        "qty": 1
      }
    ]
  }
];

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
const aiMatchBadge = document.getElementById('aiMatchBadge');
const aiReasoningWrap = document.getElementById('aiReasoningWrap');
const aiReasoningText = document.getElementById('aiReasoningText');
const aiCategoryTabs = document.getElementById('aiCategoryTabs');
let currentActiveProjectCategory = 'all';
const selectMicrocontroller = document.getElementById('selectMicrocontroller');
const mcuQuickPills = document.getElementById('mcuQuickPills');
const mcuHintBadge = document.getElementById('mcuHintBadge');
const sellerSignatureImg = document.getElementById('sellerSignatureImg');
const thumbSignature = document.getElementById('thumbSignature');
const btnRotateSig = document.getElementById('btnRotateSig');
const uploadNewSig = document.getElementById('uploadNewSig');

const KNOWN_MCUS = ['Arduino uno', 'Arduino Nano', 'ESP32', 'ESP8266', 'ARDUINO LEONARDO'];
let currentSelectedMcu = 'auto';
let currentSigRotation = 0;


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

// Initialize Datalist and Quick Pick Project Chips with Dynamic Category Filter
function initProjectFeatures() {
  populateProjectPresets();
  initMcuSelector();
  initSignatureControls();
  renderProjectChipsByCategory('all');

  // Setup Category Filter Tabs
  if (aiCategoryTabs) {
    const btns = aiCategoryTabs.querySelectorAll('.ai-cat-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat') || 'all';
        currentActiveProjectCategory = cat;
        renderProjectChipsByCategory(cat);
      });
    });
  }
}

function populateProjectPresets() {
  if (!projectPresetsList) return;
  projectPresetsList.innerHTML = '';
  PROJECT_DATABASE.forEach(proj => {
    const opt = document.createElement('option');
    opt.value = proj.title;
    opt.textContent = `${proj.title} (${proj.category})`;
    projectPresetsList.appendChild(opt);
  });
}

function renderProjectChipsByCategory(category = 'all') {
  if (!projectChipsContainer) return;
  projectChipsContainer.innerHTML = '';

  let list = PROJECT_DATABASE;
  if (category && category !== 'all') {
    list = PROJECT_DATABASE.filter(p => (p.category || '').toLowerCase() === category.toLowerCase());
  }

  // Display top chips for selected category
  const displayItems = list.slice(0, 16);

  displayItems.forEach(proj => {
    const chip = document.createElement('span');
    chip.className = 'project-chip';
    // Clean shortened name for chip display
    let shortName = proj.title.split(' using ')[0].split(' with ')[0].split(' / ')[0];
    if (shortName.length > 22) shortName = shortName.slice(0, 20) + '...';
    chip.textContent = shortName;
    chip.title = `${proj.title} [${proj.category}]`;

    chip.addEventListener('click', () => {
      document.querySelectorAll('.project-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      applyProjectToBuilder(proj);
    });

    projectChipsContainer.appendChild(chip);
  });
}

// Apply selected project to UI inputs, working principle, and preview
function applyProjectToBuilder(proj) {
  if (inputProjectTitle) inputProjectTitle.value = proj.title;
  if (inputWorkingPrinciple) inputWorkingPrinciple.value = proj.principle;
  updateProjectComponentsPreview(proj.title);
  updateInvoiceViews();
}

// ==========================================================================
// AI ENGINE 2.0 - NLP, FUZZY SEMANTIC MATCHING & ARCHITECTURE SYNTHESIZER
// ==========================================================================

const NLP_SYNONYMS = {
  // Agricultural & Water
  "watering": "irrigation", "water": "irrigation", "aqua": "water", "drip": "irrigation",
  "plants": "plant", "crops": "plant", "crop": "plant", "flora": "plant", "farming": "agri",
  "agriculture": "agri", "sump": "water tank", "overhead": "water tank",
  // Obstacle & Sonar
  "sonar": "ultrasonic", "radar": "ultrasonic", "distance": "ultrasonic", "proximity": "ultrasonic",
  "collision": "obstacle", "range": "ultrasonic", "wall": "obstacle", "avoidance": "avoiding",
  "avoid": "avoiding", "blind": "blind assistance", "cane": "blind walking stick",
  // Thermal & Climate
  "temp": "temperature", "thermal": "temperature", "fever": "temperature", "climate": "weather",
  "heat": "temperature", "humidity": "weather", "humid": "weather", "cold": "temperature",
  // Combustion & Gases
  "flame": "fire", "smoke": "gas", "lpg": "gas", "cng": "gas", "methane": "gas",
  "butane": "gas", "combustion": "fire", "pollution": "air quality", "aqi": "air quality",
  // Identification & Access
  "card": "rfid", "tag": "rfid", "nfc": "rfid", "badge": "rfid", "swipe": "rfid",
  "passcode": "password", "pin": "password", "code": "password", "keys": "keypad",
  // Motion, Inertial & Tilt
  "tilt": "mpu6050", "gyro": "mpu6050", "accelerometer": "mpu6050", "seismic": "earthquake",
  "fall": "mpu6050", "vibration": "mpu6050", "shock": "mpu6050", "motion": "mpu6050",
  // Biomedical & Health
  "pulse": "heart", "spo2": "heart", "bpm": "heart", "oximeter": "heart",
  "oxygen": "heart", "blood": "heart", "vitals": "health", "patient": "health",
  // Audio & Voice
  "speech": "audio", "voice": "audio", "music": "audio", "mp3": "audio",
  "announcer": "audio", "speaker": "audio", "sound": "audio", "talking": "audio",
  // Actuators & Mechanics
  "servo": "servo motor", "steer": "servo", "barrier": "gate", "door": "door lock",
  "latch": "lock", "lid": "dustbin", "trash": "dustbin", "bin": "dustbin", "waste": "dustbin",
  "pump": "water motor", "fan": "relay"
};

function normalizeText(text) {
  if (!text) return '';
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stemWord(w) {
  if (w.length <= 3) return w;
  if (w.endsWith('ing')) return w.slice(0, -3);
  if (w.endsWith('tion')) return w.slice(0, -4);
  if (w.endsWith('sion')) return w.slice(0, -4);
  if (w.endsWith('ment')) return w.slice(0, -4);
  if (w.endsWith('ance') || w.endsWith('ence')) return w.slice(0, -4);
  if (w.endsWith('ive')) return w.slice(0, -3);
  if (w.endsWith('ers') || w.endsWith('ors')) return w.slice(0, -3);
  if (w.endsWith('er') || w.endsWith('or')) return w.slice(0, -2);
  if (w.endsWith('ed')) return w.slice(0, -2);
  if (w.endsWith('es')) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}

function levenshteinDistance(s1, s2) {
  if (s1 === s2) return 0;
  if (s1.length === 0) return s2.length;
  if (s2.length === 0) return s1.length;
  const matrix = [];
  for (let i = 0; i <= s2.length; i++) matrix[i] = [i];
  for (let j = 0; j <= s1.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[s2.length][s1.length];
}

function isFuzzyMatch(w1, w2) {
  if (w1 === w2) return true;
  if (w1.length >= 4 && w2.length >= 4) {
    const maxDist = w1.length > 7 ? 2 : 1;
    return levenshteinDistance(w1, w2) <= maxDist;
  }
  return false;
}

// Score a candidate project against a user query string
function scoreProjectCandidate(queryStr, project) {
  const normQuery = normalizeText(queryStr);
  const normTitle = normalizeText(project.title);

  if (normQuery === normTitle) return { score: 100, confidence: 100 };
  if (normTitle.includes(normQuery) && normQuery.length > 4) {
    return { score: 95, confidence: 95 };
  }

  const queryWords = normQuery.split(' ').filter(w => w.length > 2);
  if (queryWords.length === 0) return { score: 0, confidence: 0 };

  let matchPoints = 0;
  const projectKeywords = (project.keywords || []).map(k => normalizeText(k));
  const titleWords = normTitle.split(' ');

  for (const qWord of queryWords) {
    const stemmedQ = stemWord(qWord);
    const synQ = NLP_SYNONYMS[qWord] || NLP_SYNONYMS[stemmedQ] || stemmedQ;

    let wordMatched = false;
    for (const kw of projectKeywords) {
      if (kw === qWord || kw.includes(qWord) || kw.includes(stemmedQ) || kw.includes(synQ)) {
        matchPoints += 18;
        wordMatched = true;
        break;
      }
      for (const kwPart of kw.split(' ')) {
        if (isFuzzyMatch(qWord, kwPart) || isFuzzyMatch(stemmedQ, stemWord(kwPart))) {
          matchPoints += 14;
          wordMatched = true;
          break;
        }
      }
      if (wordMatched) break;
    }

    for (const tWord of titleWords) {
      const stemmedT = stemWord(tWord);
      if (stemmedT === stemmedQ || tWord === qWord || stemmedT === synQ) {
        matchPoints += 20;
        wordMatched = true;
        break;
      } else if (isFuzzyMatch(qWord, tWord)) {
        matchPoints += 12;
        wordMatched = true;
        break;
      }
    }
  }

  const maxPossible = Math.max(1, queryWords.length * 20);
  const confidence = Math.min(99, Math.round((matchPoints / maxPossible) * 100));

  return { score: matchPoints, confidence };
}

// AI Generative Synthesis Engine (Synthesizes custom project architecture)
function synthesizeProjectGenerative(cleanTitle) {
  const lower = cleanTitle.toLowerCase();
  const suggestedComponents = [];
  const reasoningLines = [];

  function addComp(name, qty = 1, why = '') {
    const existing = suggestedComponents.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (existing) {
      existing.qty = Math.max(existing.qty, qty);
    } else {
      suggestedComponents.push({ name, qty });
      if (why) reasoningLines.push(why);
    }
  }

  // 1. Controller Selection
  if (lower.includes("esp32") || lower.includes("cloud") || lower.includes("telemetry") || lower.includes("bluetooth") || lower.includes("ble")) {
    addComp("ESP32", 1, "ESP32 dual-core SoC selected for integrated Wi-Fi + Bluetooth and high processing speed.");
  } else if (lower.includes("esp8266") || lower.includes("wifi") || lower.includes("iot") || lower.includes("web")) {
    addComp("ESP8266", 1, "ESP8266 selected for energy-efficient Wi-Fi networking and cloud dashboard telemetry.");
  } else if (lower.includes("nano") || lower.includes("compact") || lower.includes("wearable") || lower.includes("stick") || lower.includes("glove")) {
    addComp("Arduino Nano", 1, "Arduino Nano chosen for miniaturized footprint and ultra-low weight.");
  } else if (lower.includes("leonardo") || lower.includes("usb") || lower.includes("keyboard") || lower.includes("hid")) {
    addComp("ARDUINO LEONARDO", 1, "Arduino Leonardo chosen for native USB HID emulation capabilities.");
  } else {
    addComp("Arduino uno", 1, "Arduino Uno selected as the primary industrial embedded microcontroller.");
  }

  // 2. Sensor Synthesis
  if (lower.includes("soil") || lower.includes("moisture") || lower.includes("plant") || lower.includes("crop") || lower.includes("irrigation") || lower.includes("garden")) {
    addComp("SOIL MOISOR SENSOR (WET)", 1, "Wet soil moisture sensor measures subterranean volumetric moisture conductivity.");
  }
  if (lower.includes("ultrasonic") || lower.includes("distance") || lower.includes("obstacle") || lower.includes("sonar") || lower.includes("radar") || lower.includes("blind") || lower.includes("dustbin") || lower.includes("tank")) {
    addComp("ULTRASONIC SENSOR", 1, "Ultrasonic transducer measures high-precision non-contact distance and proximity.");
  }
  if (lower.includes("temp") || lower.includes("temperature") || lower.includes("humidity") || lower.includes("weather") || lower.includes("climate")) {
    if (lower.includes("dht22") || lower.includes("dh22") || lower.includes("precision")) {
      addComp("DH22", 1, "DH22 high-accuracy digital thermal and relative humidity sensor.");
    } else if (lower.includes("mlx") || lower.includes("fever") || lower.includes("contactless") || lower.includes("forehead")) {
      addComp("MLX90614 TEMP SENSOR", 1, "MLX90614 medical-grade non-contact optical infrared temperature pyrometer.");
    } else if (lower.includes("lm35") || lower.includes("analog temp")) {
      addComp("TEMP SENSOR LM35", 1, "LM35 linear analog Celsius temperature sensor.");
    } else {
      addComp("DHT11", 1, "DHT11 digital temperature and humidity sensor.");
    }
  }
  if (lower.includes("gas") || lower.includes("smoke") || lower.includes("lpg") || lower.includes("methane") || lower.includes("fire") || lower.includes("air quality") || lower.includes("pollution")) {
    addComp("MQ2 SMOKE/GAS SENSOR", 1, "MQ-2 electrochemical sensor detects combustible hydrocarbons, LPG, and toxic smoke.");
  }
  if (lower.includes("rfid") || lower.includes("card") || lower.includes("tag") || lower.includes("attendance") || lower.includes("toll") || lower.includes("door lock") || lower.includes("access")) {
    addComp("RFID RC522", 1, "RC522 13.56MHz SPI RFID reader scans contactless smart cards and keyfobs.");
  }
  if (lower.includes("pulse") || lower.includes("heart") || lower.includes("spo2") || lower.includes("oximeter") || lower.includes("vital") || lower.includes("patient")) {
    addComp("MAX30102 PULSE", 1, "MAX30102 dual-wavelength optical PPG sensor calculates pulse BPM and SpO2 oxygenation.");
  }
  if (lower.includes("ir") || lower.includes("infrared") || lower.includes("line") || lower.includes("proximity") || lower.includes("traffic") || lower.includes("sanitizer")) {
    const qty = (lower.includes("line") || lower.includes("traffic") || lower.includes("parking")) ? 2 : 1;
    addComp("IR SENSOR", qty, `Infrared proximity sensor (x${qty}) detects optical surface reflection transitions.`);
  }
  if (lower.includes("metal") || lower.includes("inductive") || lower.includes("mine") || lower.includes("coin")) {
    addComp("METAL SENSOR", 1, "Inductive proximity transducer senses metallic eddy current variations.");
  }
  if (lower.includes("tds") || lower.includes("water quality") || lower.includes("purity") || lower.includes("salinity")) {
    addComp("TDS SENSOR", 1, "TDS conductivity probe senses total dissolved solids (PPM) for water purity.");
  }
  if (lower.includes("ph") || lower.includes("acidity") || lower.includes("alkalinity")) {
    addComp("PH SENSOR", 1, "Glass electrode pH probe measures hydrogen-ion potential and chemical balance.");
  }
  if (lower.includes("color") || lower.includes("colour") || lower.includes("rgb") || lower.includes("sorting")) {
    addComp("COLOUR SENSOR YCS3200", 1, "TCS3200 RGB photodiode sensor extracts optical color frequency signatures.");
  }
  if (lower.includes("gyro") || lower.includes("accelerometer") || lower.includes("tilt") || lower.includes("fall") || lower.includes("earthquake") || lower.includes("gesture") || lower.includes("balance") || lower.includes("crash")) {
    addComp("MPU6050", 1, "MPU6050 6-axis MEMS gyro and accelerometer measures angular tilt, orientation, and shock.");
  }
  if (lower.includes("gps") || lower.includes("location") || lower.includes("tracker") || lower.includes("tracking") || lower.includes("coordinates") || lower.includes("navigation")) {
    addComp("GPS MODULE NEO 6M", 1, "NEO-6M satellite receiver streams real-time latitude, longitude, and elevation.");
  }
  if (lower.includes("current") || lower.includes("energy") || lower.includes("power") || lower.includes("amps") || lower.includes("watt")) {
    addComp("ACS712 20A CURRENT SENSOR", 1, "ACS712 20A Hall-effect current sensor samples electrical load consumption.");
    addComp("DC VOLTMETER VOLT SENSOR", 1, "DC voltage sensor reads potential drop across precision resistive dividers.");
  }
  if (lower.includes("voltage") || lower.includes("battery") || lower.includes("solar") || lower.includes("volt")) {
    addComp("DC VOLTMETER VOLT SENSOR", 1, "DC voltmeter sensor monitors real-time battery and power bus potential.");
  }

  // 3. Communications & Audio
  if (lower.includes("sim") || lower.includes("gsm") || lower.includes("sms") || lower.includes("call") || lower.includes("cellular")) {
    addComp("SIM800L", 1, "SIM800L cellular quad-band module dispatches emergency SMS alerts and remote data.");
  }
  if (lower.includes("lora") || lower.includes("long range") || lower.includes("sx1278") || lower.includes("telemetry")) {
    addComp("LORA RA02 (SX1278)", 1, "SX1278 433MHz LoRa transceiver enables multi-kilometer telemetry transmission.");
    addComp("ANTENNA", 1, "433MHz tuned external gain antenna maximizes wireless radiation range.");
    addComp("SMA150MM", 1, "Low-loss SMA RF coaxial extension cable.");
    addComp("3.3V 5V LOGIC LEVEL CONVERTOR", 1, "Bi-directional logic level shifter safeguards the 3.3V LoRa transceiver.");
  }
  if (lower.includes("audio") || lower.includes("voice") || lower.includes("sound") || lower.includes("mp3") || lower.includes("speech") || lower.includes("announcer") || lower.includes("player")) {
    addComp("DF PLAYER MINI", 1, "DFPlayer Mini provides dedicated hardware MP3/WAV decoding from micro-SD.");
  }

  // 4. Actuators & Switches
  if (lower.includes("motor") || lower.includes("pump") || lower.includes("water") || lower.includes("fountain")) {
    addComp("5V RELAY MODULE", 1, "5V opto-isolated relay safely switches heavy DC motor and pump inductive loads.");
    addComp("WATER MOTOR", 1, "Submersible DC water motor delivers pressurized fluid movement.");
  } else if (lower.includes("relay") || lower.includes("switch") || lower.includes("light") || lower.includes("lamp") || lower.includes("ac")) {
    addComp("5V RELAY MODULE", 1, "5V relay module enables microcontrollers to switch high-voltage AC/DC circuits.");
  }
  if (lower.includes("servo") || lower.includes("gate") || lower.includes("arm") || lower.includes("lock") || lower.includes("door") || lower.includes("lid") || lower.includes("dustbin") || lower.includes("solar tracker") || lower.includes("sorting") || lower.includes("robot")) {
    const qty = (lower.includes("sorting") || lower.includes("solar tracker") || lower.includes("arm")) ? 2 : 1;
    addComp("SERVO MOTOR SG90", qty, `SG90 micro servo actuator (x${qty}) provides precision angular rotation (0-180 deg).`);
  }
  if (lower.includes("alarm") || lower.includes("buzzer") || lower.includes("alert") || lower.includes("siren") || lower.includes("warning") || lower.includes("beeper")) {
    addComp("BUZZER MODULE", 1, "Piezo-electric buzzer module sounds acoustic status and hazard alert tones.");
  }
  if (lower.includes("keypad") || lower.includes("pin") || lower.includes("password") || lower.includes("matrix")) {
    addComp("KEYPAD 4X4", 1, "4x4 matrix keypad allows numerical user code and command entry.");
  }
  if (lower.includes("button") || lower.includes("pushbutton") || lower.includes("trigger")) {
    addComp("PUSHBUTTON", 2, "Tactile pushbuttons for manual operational triggers and resets.");
  }

  // 5. Displays
  if (lower.includes("oled") || suggestedComponents.some(c => c.name === "ESP32" || c.name === "MAX30102 PULSE")) {
    addComp("OLED 0.96", 1, "0.96-inch 128x64 high-contrast monochrome I2C OLED graphical screen.");
  } else {
    addComp("LCD 16X2", 1, "16x2 alphanumeric liquid crystal display provides real-time system readouts.");
  }

  // 6. Mandatory Interconnects
  addComp("JUMPER WIRE", 1, "Multi-color Dupont jumper wires for reliable breadboard and sensor interconnects.");
  addComp("BREADBOARD", 1, "Solderless prototype breadboard provides organized bus distribution.");

  const controllerName = suggestedComponents[0] ? suggestedComponents[0].name : "microcontroller unit";
  const sensorItems = suggestedComponents.filter(c => c.name.includes("SENSOR") || c.name.includes("DHT") || c.name.includes("PULSE") || c.name.includes("GPS") || c.name.includes("MPU") || c.name.includes("RFID"));
  const sensorDesc = sensorItems.length > 0 ? sensorItems.map(c => c.name).join(", ") : "designated sensory modules";

  const generatedPrinciple = `The project operates using an embedded ${controllerName} which continuously monitors inputs from ${sensorDesc}. Upon sampling physical transitions, the controller processes digital signals against calibrated threshold limits. When triggered, the controller automatically coordinates system actuators and relays, delivering autonomous feedback, protection, and real-time status output.`;

  const generatedReasoning = reasoningLines.length > 0
    ? reasoningLines.join(" ")
    : `Synthesized complete hardware architecture around ${controllerName} with matching sensing transducers, driver relays, and display readouts.`;

  return {
    matched: false,
    generative: true,
    confidence: "AI Synthesized",
    title: cleanTitle,
    category: "Custom / AI Architecture",
    principle: generatedPrinciple,
    reasoning: generatedReasoning,
    components: suggestedComponents
  };
}

// Master Detection & Matching Function
function detectProjectComponentsAndPrinciple(inputTitle) {
  if (!inputTitle || !inputTitle.trim()) return null;
  const cleanTitle = inputTitle.trim();
  const lower = cleanTitle.toLowerCase();

  // 1. Direct or exact match
  for (const proj of PROJECT_DATABASE) {
    if (proj.title.toLowerCase() === lower) {
      return {
        matched: true,
        generative: false,
        confidence: 100,
        title: proj.title,
        category: proj.category,
        principle: proj.principle,
        reasoning: proj.reasoning || `Pre-configured production architecture optimized for ${proj.title}.`,
        components: proj.components
      };
    }
  }

  // 2. Multi-token semantic fuzzy scoring across database
  let bestProj = null;
  let bestScore = 0;
  let bestConfidence = 0;

  for (const proj of PROJECT_DATABASE) {
    const res = scoreProjectCandidate(cleanTitle, proj);
    if (res.score > bestScore) {
      bestScore = res.score;
      bestConfidence = res.confidence;
      bestProj = proj;
    }
  }

  if (bestProj && bestScore >= 18) {
    return {
      matched: true,
      generative: false,
      confidence: Math.max(75, bestConfidence),
      title: bestProj.title,
      category: bestProj.category,
      principle: bestProj.principle,
      reasoning: bestProj.reasoning || `Matched against validated engineering project with ${Math.max(75, bestConfidence)}% confidence.`,
      components: bestProj.components
    };
  }

  // 3. Fallback to Generative AI Synthesis
  return synthesizeProjectGenerative(cleanTitle);
}



// Initialize Microcontroller Selector & Quick Pills
function initMcuSelector() {
  if (selectMicrocontroller) {
    selectMicrocontroller.addEventListener('change', (e) => {
      currentSelectedMcu = e.target.value;
      updateMcuPillsUI(currentSelectedMcu);
      const title = inputProjectTitle ? inputProjectTitle.value.trim() : '';
      if (title) updateProjectComponentsPreview(title);
    });
  }

  if (mcuQuickPills) {
    const pills = mcuQuickPills.querySelectorAll('.mcu-pill');
    pills.forEach(p => {
      p.addEventListener('click', () => {
        const val = p.getAttribute('data-mcu') || 'auto';
        currentSelectedMcu = val;
        if (selectMicrocontroller) selectMicrocontroller.value = val;
        updateMcuPillsUI(val);
        const title = inputProjectTitle ? inputProjectTitle.value.trim() : '';
        if (title) updateProjectComponentsPreview(title);
      });
    });
  }
}

function updateMcuPillsUI(val) {
  if (!mcuQuickPills) return;
  mcuQuickPills.querySelectorAll('.mcu-pill').forEach(p => {
    if (p.getAttribute('data-mcu') === val) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
  if (selectMicrocontroller && selectMicrocontroller.value !== val) {
    selectMicrocontroller.value = val;
  }
}

// Initialize Signature Controls (Rotate & Upload)
function initSignatureControls() {
  if (btnRotateSig) {
    btnRotateSig.addEventListener('click', () => {
      currentSigRotation = (currentSigRotation + 90) % 360;
      applySignatureRotation(currentSigRotation);
    });
  }

  if (uploadNewSig) {
    uploadNewSig.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const dataUrl = evt.target.result;
        if (sellerSignatureImg) sellerSignatureImg.src = dataUrl;
        if (thumbSignature) thumbSignature.src = dataUrl;
        currentSigRotation = 0;
        applySignatureRotation(0);
        showToastNotification('Signature uploaded successfully!', 'success');
      };
      reader.readAsDataURL(file);
    });
  }
}

function applySignatureRotation(deg) {
  const rotStyle = `rotate(${deg}deg)`;
  if (sellerSignatureImg) {
    sellerSignatureImg.style.transform = rotStyle;
  }
  if (thumbSignature) {
    thumbSignature.style.transform = rotStyle;
  }
}

// Helper to override or swap microcontroller in detected components
function applyMcuOverride(components, targetMcu) {
  if (!targetMcu || targetMcu === 'auto') return components;
  
  let mcuFound = false;
  const updated = components.map(c => {
    if (KNOWN_MCUS.some(m => m.toLowerCase() === c.name.toLowerCase())) {
      mcuFound = true;
      return { name: targetMcu, qty: 1 };
    }
    return c;
  });

  if (!mcuFound) {
    updated.unshift({ name: targetMcu, qty: 1 });
  }

  const unique = [];
  const seen = new Set();
  for (const item of updated) {
    const key = item.name.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(item);
    }
  }
  return unique;
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

  // Apply user-selected microcontroller override if set
  currentDetectedProjectComponents = applyMcuOverride(result.components, currentSelectedMcu);

  // Update Microcontroller UI Badge & Pills
  if (mcuHintBadge) {
    if (currentSelectedMcu === 'auto') {
      const autoMcu = currentDetectedProjectComponents.find(c => KNOWN_MCUS.some(m => m.toLowerCase() === c.name.toLowerCase()));
      mcuHintBadge.textContent = autoMcu ? `⚡ Auto: ${autoMcu.name}` : '⚡ Auto-Selected';
      updateMcuPillsUI(autoMcu ? autoMcu.name : 'auto');
    } else {
      mcuHintBadge.textContent = `Custom: ${currentSelectedMcu}`;
      updateMcuPillsUI(currentSelectedMcu);
    }
  }
  projectComponentsPreview.style.display = 'block';

  // Update AI Confidence Badge
  if (aiMatchBadge) {
    if (result.generative) {
      aiMatchBadge.className = 'ai-confidence-pill generative';
      aiMatchBadge.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> AI Synthesized';
    } else {
      aiMatchBadge.className = 'ai-confidence-pill';
      aiMatchBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${result.confidence}% Match (${result.category || 'Engineering'})`;
    }
  }

  // Update AI Architecture & Reasoning Wrap
  if (aiReasoningWrap && aiReasoningText) {
    if (result.reasoning) {
      aiReasoningText.textContent = result.reasoning;
      aiReasoningWrap.style.display = 'block';
    } else {
      aiReasoningWrap.style.display = 'none';
    }
  }

  let totalEstimate = 0;
  detectedChipsList.innerHTML = '';

  currentDetectedProjectComponents.forEach(comp => {
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

  if (detectedItemCount) detectedItemCount.textContent = currentDetectedProjectComponents.length;
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

  // Update Project Specification Views on A4 Sheet (Project Title ONLY - NEVER working principle in bill)
  const showProject = chkShowProjectOnBill ? chkShowProjectOnBill.checked : true;
  const projectTitle = inputProjectTitle ? inputProjectTitle.value.trim() : '';

  if (viewProjectSection) {
    if (showProject && projectTitle) {
      viewProjectSection.style.display = 'block';
      if (viewProjectTitle) viewProjectTitle.textContent = projectTitle;
      
      // GUARANTEE: Working Principle is strictly omitted from the bill!
      if (viewProjectPrincipleRow) {
        viewProjectPrincipleRow.style.display = 'none';
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


// ==========================================================================
// BILL EXPORT ENGINE: PDF GENERATION & SAVE TO C:\Users\Gokulnatraj\Documents\BILL
// ==========================================================================

const TARGET_BILL_DIRECTORY = 'C:\\Users\\Gokulnatraj\\Documents\\BILL';

function showToastNotification(message, type = 'info') {
  let toast = document.getElementById('appNotificationToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appNotificationToast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  
  const icon = type === 'success' ? 'fa-circle-check font-green' : 'fa-info-circle font-blue';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  toast.classList.add('show');
  
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}

async function downloadPDF() {
  saveCurrentInvoiceToHistory(false);
  
  const element = document.getElementById('invoiceA4Sheet');
  const invNo = (inputInvoiceNo && inputInvoiceNo.value ? inputInvoiceNo.value.trim() : 'INV-2026-001').replace(/[^a-zA-Z0-9_-]/g, '_');
  const custName = (inputCustName && inputCustName.value ? inputCustName.value.trim() : 'Customer').replace(/[^a-zA-Z0-9_-]/g, '_');
  const filename = `${invNo}_${custName}.pdf`;

  showToastNotification(`Generating ${filename} for ${TARGET_BILL_DIRECTORY}...`, 'info');

  const opt = {
    margin: 0,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  try {
    if (typeof html2pdf !== 'undefined') {
      const worker = html2pdf().from(element).set(opt);
      const pdfBlob = await worker.outputPdf('blob');
      
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Pdf = reader.result;
        let serverSaved = false;

        // 1. Attempt automated save to local server (writes directly to C:\Users\Gokulnatraj\Documents\BILL)
        try {
          const res = await fetch('/api/save-bill', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              filename: filename,
              pdfBase64: base64Pdf,
              invoiceData: {
                invoiceNo: invNo,
                customer: inputCustName ? inputCustName.value : '',
                grandTotal: viewGrandTotal ? viewGrandTotal.textContent : '',
                date: inputInvoiceDate ? inputInvoiceDate.value : '',
                items: invoiceItems
              }
            })
          });

          if (res.ok) {
            const data = await res.json();
            if (data.success) {
              serverSaved = true;
              showToastNotification(`Saved directly to ${data.savedPath}`, 'success');
              alert(`SUCCESS: Bill PDF saved directly to:\n${data.savedPath}`);
            }
          }
        } catch (err) {
          console.log('Local server save notice:', err.message);
        }

        // 2. If running via file:/// or server is offline, use showSaveFilePicker or standard browser download
        if (!serverSaved) {
          if ('showSaveFilePicker' in window) {
            try {
              const handle = await window.showSaveFilePicker({
                suggestedName: filename,
                types: [{
                  description: 'PDF Document',
                  accept: { 'application/pdf': ['.pdf'] }
                }]
              });
              const writable = await handle.createWritable();
              await writable.write(pdfBlob);
              await writable.close();
              showToastNotification(`Saved ${filename} to Documents\\BILL!`, 'success');
              return;
            } catch (pickerErr) {
              if (pickerErr.name === 'AbortError') return;
              console.log('File picker notice:', pickerErr.message);
            }
          }

          // Fallback browser download
          const url = URL.createObjectURL(pdfBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }, 100);
          showToastNotification(`Downloaded ${filename}! Save into ${TARGET_BILL_DIRECTORY}`, 'success');
        }
      };

      reader.readAsDataURL(pdfBlob);
    } else {
      window.print();
    }
  } catch (err) {
    console.error('PDF export error:', err);
    window.print();
  }
}

function printInvoice() {
  downloadPDF();
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

