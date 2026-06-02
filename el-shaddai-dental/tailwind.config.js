/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinicNavy: {
          DEFAULT: '#0f172a', // Dark Navy / Slate 900
          light: '#1e293b',   // Slate 800
          card: 'rgba(15, 23, 42, 0.45)', // Sleek dark navy card base
        },
        clinicTeal: {
          DEFAULT: '#0d9488', // Teal 600
          light: '#14b8a6',   // Teal 500
          hover: '#0f766e',   // Teal 700
          lightest: '#ccfbf1',// Teal 100
        },
        clinicSky: {
          DEFAULT: '#0284c7', // Sky 600
          light: '#06b6d4',   // Cyan 500
          hover: '#0369a1',   // Sky 700
        },
        clinicGreen: {
          DEFAULT: '#10b981', // Emerald 500
          light: '#34d399',   // Emerald 400
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2.5s infinite',
      }
    },
  },
  plugins: [],
}
