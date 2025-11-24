/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: "#151b2e",
          900: "#0b0f19",
          950: "#050816",
        },
        neon: {
          cyan: "#00E5FF",
          magenta: "#FF33CC",
          green: "#39FF14",
          red: "#FF3131",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"Rajdhani"', "sans-serif"],
      },
      boxShadow: {
        "neon-cyan": "0 0 10px rgba(0, 229, 255, 0.5)",
        "neon-green": "0 0 10px rgba(57, 255, 20, 0.5)",
        "neon-red": "0 0 10px rgba(255, 49, 49, 0.5)",
      },
      animation: {
        scan: "scan 4s linearyb infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(500%)" },
        },
      },
    },
  },
  plugins: [],
};
