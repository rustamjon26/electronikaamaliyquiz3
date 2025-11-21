/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050816',
          900: '#0B0F19',
          800: '#151B2E',
        },
        neon: {
          cyan: '#00E5FF',
          magenta: '#FF33CC',
          green: '#39FF14',
          red: '#FF073A'
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00E5FF, 0 0 20px rgba(0, 229, 255, 0.3)',
        'neon-magenta': '0 0 5px #FF33CC, 0 0 20px rgba(255, 51, 204, 0.3)',
        'neon-green': '0 0 5px #39FF14, 0 0 20px rgba(57, 255, 20, 0.3)',
        'neon-red': '0 0 5px #FF073A, 0 0 20px rgba(255, 7, 58, 0.3)',
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}