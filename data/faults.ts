import { CircuitPuzzle } from '../types/puzzle';

export const puzzles: CircuitPuzzle[] = [
  {
    id: 1,
    title: "Common Emitter Amplifier",
    topic: "BJT",
    difficulty: "easy",
    svg: `
      <g id="circuit-1">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#00E5FF" />
          </marker>
        </defs>
        <!-- Rails -->
        <line x1="50" y1="50" x2="350" y2="50" stroke="#00E5FF" stroke-width="2" />
        <text x="360" y="55" fill="#00E5FF" font-family="monospace" font-size="14">VCC (+12V)</text>
        <line x1="50" y1="250" x2="350" y2="250" stroke="#00E5FF" stroke-width="2" />
        <text x="360" y="255" fill="#00E5FF" font-family="monospace" font-size="14">GND</text>
        
        <!-- Resistors -->
        <!-- R1 (Base upper) -->
        <path d="M100,50 V90 L90,100 L110,110 L90,120 L110,130 L100,140 V150" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <text x="115" y="120" fill="#94a3b8" font-size="12">R1</text>
        
        <!-- R2 (Base lower) -->
        <path d="M100,150 V190 L90,200 L110,210 L90,220 L110,230 L100,240 V250" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <text x="115" y="220" fill="#94a3b8" font-size="12">R2</text>
        
        <!-- RC (Collector) -->
        <path d="M200,50 V90 L190,100 L210,110 L190,120 L210,130 L200,140 V150" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <text x="215" y="120" fill="#94a3b8" font-size="12">RC</text>

        <!-- RE (Emitter) -->
        <path d="M200,210 V220 L190,230 L210,240 L190,250 L210,260 V250" fill="none" stroke="#e2e8f0" stroke-width="2" transform="translate(0,-10)" />
        <text x="215" y="230" fill="#94a3b8" font-size="12">RE</text>

        <!-- Transistor Q1 NPN -->
        <circle cx="200" cy="180" r="20" stroke="#00E5FF" fill="none" stroke-width="2" />
        <line x1="200" y1="160" x2="200" y2="150" stroke="#e2e8f0" stroke-width="2" /> <!-- Top lead -->
        <line x1="200" y1="200" x2="200" y2="210" stroke="#e2e8f0" stroke-width="2" /> <!-- Bottom lead -->
        <line x1="180" y1="180" x2="100" y2="150" stroke="#e2e8f0" stroke-width="2" /> <!-- Base lead to divider -->
        
        <!-- Internal BJT structure -->
        <line x1="190" y1="165" x2="190" y2="195" stroke="#00E5FF" stroke-width="3" /> <!-- Base plate -->
        <line x1="190" y1="175" x2="210" y2="165" stroke="#00E5FF" stroke-width="2" /> <!-- Top internal -->
        <line x1="190" y1="185" x2="210" y2="195" stroke="#00E5FF" stroke-width="2" /> <!-- Bottom internal -->
        
        <!-- THE FAULT: Arrow is on the TOP leg (Collector side), pointing OUT -->
        <!-- Standard NPN Emitter Follower/Amp: Arrow should be on BOTTOM leg pointing OUT -->
        <polygon points="205,168 212,164 208,172" fill="#00E5FF" /> 
        
        <!-- Labels -->
        <text x="225" y="180" fill="#00E5FF" font-weight="bold">Q1</text>
      </g>
    `,
    faultOptions: [
      "Resistor R1 is shorted to VCC",
      "Transistor Q1 is inverted (Collector/Emitter swapped)",
      "Capacitor C1 is missing from input",
      "Resistor RE value is too high",
    ],
    correctIndex: 1,
    explanation: "The NPN transistor symbol shows the arrow on the top terminal connected to RC. For a Common Emitter amplifier, the Emitter (with the arrow) should be connected to RE/Ground. Here, the Collector and Emitter are swapped, which will result in very low gain and likely reverse-active mode operation.",
  },
  {
    id: 2,
    title: "Inverting Op-Amp",
    topic: "OpAmp",
    difficulty: "medium",
    svg: `
      <g id="circuit-2">
        <!-- OpAmp Triangle -->
        <path d="M150,100 L250,150 L150,200 Z" fill="#0B0F19" stroke="#00E5FF" stroke-width="2" />
        
        <!-- Inputs -->
        <text x="160" y="135" fill="#00E5FF" font-size="16" font-weight="bold">-</text>
        <text x="160" y="185" fill="#00E5FF" font-size="16" font-weight="bold">+</text>
        
        <!-- Output -->
        <line x1="250" y1="150" x2="350" y2="150" stroke="#00E5FF" stroke-width="2" />
        <text x="360" y="155" fill="#00E5FF" font-family="monospace">Vout</text>

        <!-- Input Resistor Rin -->
        <line x1="50" y1="125" x2="90" y2="125" stroke="#e2e8f0" stroke-width="2" />
        <path d="M90,125 L95,115 L105,135 L115,115 L125,135 L130,125" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <line x1="130" y1="125" x2="150" y2="125" stroke="#e2e8f0" stroke-width="2" />
        <text x="95" y="110" fill="#94a3b8" font-size="12">Rin</text>

        <!-- Non-inverting to GND -->
        <line x1="150" y1="175" x2="130" y2="175" stroke="#e2e8f0" stroke-width="2" />
        <line x1="130" y1="175" x2="130" y2="190" stroke="#e2e8f0" stroke-width="2" />
        <line x1="120" y1="190" x2="140" y2="190" stroke="#00E5FF" stroke-width="2" /> <!-- GND bar -->
        <line x1="125" y1="195" x2="135" y2="195" stroke="#00E5FF" stroke-width="2" />

        <!-- Feedback Resistor Rf -->
        <!-- FAULT: Rf connects Vout to Non-Inverting (+) input (Pin 175y) instead of Inverting (Pin 125y) -->
        <polyline points="300,150 300,50 170,50 170,175 150,175" fill="none" stroke="#FF33CC" stroke-width="2" />
        
        <!-- Resistor zig zag on feedback path -->
        <rect x="210" y="40" width="40" height="20" fill="#0B0F19" stroke="#e2e8f0" />
        <text x="220" y="55" fill="#94a3b8" font-size="12">Rf</text>

        <text x="40" y="130" fill="#00E5FF" font-family="monospace">Vin</text>
      </g>
    `,
    faultOptions: [
      "Rin value is undefined",
      "Positive feedback is used instead of negative feedback",
      "The Op-Amp is missing power rails",
      "Ground connection is on the wrong terminal",
    ],
    correctIndex: 1,
    explanation: "This is intended to be an amplifier, but the feedback resistor (Rf) is connected to the Non-Inverting (+) input. This creates Positive Feedback, turning the circuit into a Schmidt Trigger or latch, causing the output to saturate at rails rather than amplify linearly.",
  },
  {
    id: 3,
    title: "Zener Voltage Regulator",
    topic: "Power",
    difficulty: "medium",
    svg: `
      <g id="circuit-3">
        <!-- Source -->
        <text x="20" y="55" fill="#00E5FF" font-family="monospace">Vin (20V)</text>
        <line x1="80" y1="50" x2="120" y2="50" stroke="#00E5FF" stroke-width="2" />
        
        <!-- Series Resistor Rs -->
        <path d="M120,50 L125,40 L135,60 L145,40 L155,60 L160,50" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <line x1="160" y1="50" x2="250" y2="50" stroke="#00E5FF" stroke-width="2" />
        <text x="130" y="35" fill="#94a3b8" font-size="12">Rs</text>

        <!-- Output -->
        <line x1="250" y1="50" x2="350" y2="50" stroke="#00E5FF" stroke-width="2" />
        <circle cx="350" cy="50" r="3" fill="#00E5FF" />
        <text x="360" y="55" fill="#00E5FF" font-family="monospace">Vout</text>

        <!-- Ground Rail -->
        <line x1="80" y1="200" x2="350" y2="200" stroke="#00E5FF" stroke-width="2" />
        <text x="360" y="205" fill="#00E5FF" font-family="monospace">GND</text>

        <!-- Zener Diode -->
        <!-- FAULT: Zener is forward biased (Arrow points down, bar at bottom) or regular diode style? 
             Correct Zener Regulator: Zener acts in reverse breakdown. Cathode (Bar) at Top, Anode at Bottom.
             Visual: Triangle points UP, Bar at TOP. 
             FAULT HERE: Triangle points DOWN (Anode at top), Bar at BOTTOM. It will just conduct like a normal diode ~0.7V drop. -->
        
        <line x1="250" y1="50" x2="250" y2="100" stroke="#00E5FF" stroke-width="2" />
        <line x1="250" y1="150" x2="250" y2="200" stroke="#00E5FF" stroke-width="2" />
        
        <!-- Diode Symbol Pointing DOWN -->
        <polygon points="240,100 260,100 250,120" fill="none" stroke="#00E5FF" stroke-width="2" />
        <line x1="240" y1="120" x2="260" y2="120" stroke="#00E5FF" stroke-width="2" /> <!-- The bar -->
        <!-- Zener wings -->
        <line x1="240" y1="120" x2="240" y2="115" stroke="#00E5FF" stroke-width="2" />
        <line x1="260" y1="120" x2="260" y2="125" stroke="#00E5FF" stroke-width="2" />

        <text x="265" y="110" fill="#00E5FF">Dz (5.1V)</text>
      </g>
    `,
    faultOptions: [
      "Rs value is too small",
      "Zener diode is forward biased (installed backwards)",
      "Capacitor filter is missing",
      "Load resistance is infinite",
    ],
    correctIndex: 1,
    explanation: "For a Zener diode to regulate voltage at its Zener voltage (e.g., 5.1V), it must be Reverse Biased (Cathode to Positive, Anode to Ground). In this schematic, the Zener is Forward Biased (Anode to Positive). It will simply act as a normal diode, clamping Vout to approximately 0.7V instead of 5.1V.",
  },
  {
    id: 4,
    title: "MOSFET Low-Side Switch",
    topic: "FET",
    difficulty: "medium",
    svg: `
      <g id="circuit-4">
        <!-- Load (Lamp) -->
        <circle cx="200" cy="80" r="15" stroke="#e2e8f0" stroke-width="2" fill="none" />
        <path d="M190,70 L210,90 M190,90 L210,70" stroke="#e2e8f0" /> <!-- X inside -->
        <text x="225" y="85" fill="#94a3b8">LOAD</text>

        <!-- VCC -->
        <line x1="200" y1="30" x2="200" y2="65" stroke="#00E5FF" stroke-width="2" />
        <text x="190" y="25" fill="#00E5FF" font-family="monospace">+24V</text>

        <!-- Connection to FET -->
        <line x1="200" y1="95" x2="200" y2="140" stroke="#00E5FF" stroke-width="2" />

        <!-- MOSFET N-Channel -->
        <!-- Drain at top (200,140), Source at bottom (200, 200) -->
        <!-- Gate at left -->
        
        <!-- Gate Plate -->
        <line x1="180" y1="150" x2="180" y2="190" stroke="#00E5FF" stroke-width="2" />
        <!-- Channel Plate -->
        <line x1="190" y1="150" x2="190" y2="190" stroke="#00E5FF" stroke-width="2" />
        
        <!-- Source Lead -->
        <line x1="190" y1="185" x2="200" y2="185" stroke="#00E5FF" stroke-width="2" />
        <line x1="200" y1="185" x2="200" y2="220" stroke="#00E5FF" stroke-width="2" />

        <!-- Drain Lead -->
        <line x1="190" y1="155" x2="200" y2="155" stroke="#00E5FF" stroke-width="2" />
        <line x1="200" y1="155" x2="200" y2="140" stroke="#00E5FF" stroke-width="2" />

        <!-- Gate Connection -->
        <line x1="180" y1="170" x2="100" y2="170" stroke="#00E5FF" stroke-width="2" />
        
        <!-- GND -->
        <line x1="180" y1="220" x2="220" y2="220" stroke="#00E5FF" stroke-width="2" />
        <text x="230" y="225" fill="#00E5FF" font-family="monospace">GND</text>
        
        <!-- Control Signal -->
        <rect x="40" y="160" width="60" height="20" fill="#151B2E" stroke="#00E5FF" />
        <text x="50" y="175" fill="#00E5FF" font-size="10">MCU Pin</text>

        <!-- FAULT: Gate is floating. No pull-down resistor. -->
        <!-- Just a straight line from MCU to Gate. -->
        <!-- If MCU is tri-stated or during boot, Gate floats, FET might turn partly on and burn. -->
        
        <text x="210" y="170" fill="#00E5FF" font-weight="bold">Q1</text>
      </g>
    `,
    faultOptions: [
      "MOSFET is P-Channel but used as Low-Side",
      "Gate is floating (Missing pull-down resistor)",
      "Load voltage is too high for this MOSFET",
      "Drain and Source are shorted",
    ],
    correctIndex: 1,
    explanation: "The Gate of the MOSFET is connected directly to an MCU pin without a pull-down resistor. If the MCU pin is high-impedance (e.g., during reset/boot) or tri-stated, the Gate voltage can float. This can cause the MOSFET to operate in its linear region, generating excessive heat and potentially destroying the device.",
  },
  {
    id: 5,
    title: "Logic Gate Level",
    topic: "Digital",
    difficulty: "easy",
    svg: `
      <g id="circuit-5">
        <!-- AND Gate -->
        <path d="M100,50 V150 A50,50 0 0 0 100,50" fill="#151B2E" stroke="#00E5FF" stroke-width="2" transform="translate(50,0)"/>
        <line x1="150" y1="50" x2="150" y2="150" stroke="#00E5FF" stroke-width="2" />

        <!-- Input A -->
        <line x1="50" y1="70" x2="150" y2="70" stroke="#00E5FF" stroke-width="2" />
        <text x="30" y="75" fill="#00E5FF" font-family="monospace">A (1)</text>

        <!-- Input B -->
        <!-- FAULT: Input B is not connected to anything -->
        <line x1="100" y1="130" x2="150" y2="130" stroke="#00E5FF" stroke-width="2" />
        <circle cx="100" cy="130" r="3" fill="none" stroke="#FF33CC" stroke-width="2" />
        <text x="80" y="125" fill="#FF33CC" font-size="12">?</text>

        <!-- Output -->
        <line x1="200" y1="100" x2="300" y2="100" stroke="#00E5FF" stroke-width="2" />
        <text x="310" y="105" fill="#00E5FF" font-family="monospace">Y</text>
        
        <!-- LED at output -->
        <polygon points="300,90 300,110 320,100" fill="#e2e8f0" />
        <line x1="320" y1="90" x2="320" y2="110" stroke="#e2e8f0" width="2" />

      </g>
    `,
    faultOptions: [
      "Output LED is backward",
      "AND gate requires 3 inputs",
      "Input B is floating (undefined state)",
      "Voltage is too low",
    ],
    correctIndex: 2,
    explanation: "Input B of the digital logic gate is left floating. In many logic families (like CMOS), a floating input acts as an antenna, picking up noise and causing the gate to switch rapidly or settle in an undefined linear state, causing high power consumption and unpredictable errors.",
  }
];
