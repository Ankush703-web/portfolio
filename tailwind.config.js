/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: '#0a0a0a',
          dark: '#0d1117',
          green: '#00ff41',
          'green-dim': '#00cc33',
          'green-glow': '#00ff4133',
          amber: '#ffb700',
          red: '#ff3333',
          cyan: '#00d4ff',
          gray: '#1a1a2e',
          border: '#1f2937',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Courier New', 'monospace'],
        terminal: ['"Share Tech Mono"', '"Courier Prime"', 'monospace'],
        display: ['"Orbitron"', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scan': 'scan 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'matrix-fall': 'matrix-fall 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'type': 'type 2s steps(40, end)',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41' },
          '50%': { boxShadow: '0 0 20px #00ff41, 0 0 40px #00ff41' },
        },
      },
      boxShadow: {
        'green-glow': '0 0 10px #00ff41, 0 0 20px #00ff4166',
        'green-sm': '0 0 5px #00ff4188',
        'cyan-glow': '0 0 10px #00d4ff, 0 0 20px #00d4ff66',
      },
    },
  },
  plugins: [],
}
