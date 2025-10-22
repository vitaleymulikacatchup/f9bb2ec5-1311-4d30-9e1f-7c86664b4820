/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hs-dark': '#2a2d35',
        'hs-darker': '#1e2025',
        'hs-blue': '#4a90e2',
        'hs-green': '#5cb85c',
        'hs-purple': '#8e44ad',
        'hs-orange': '#f39c12',
        'hs-red': '#e74c3c',
        'hs-yellow': '#f1c40f',
        'hs-pink': '#e91e63',
        'hs-cyan': '#17a2b8',
        'hs-teal': '#20c997',
        'hs-gray': '#6c757d',
        'hs-light-gray': '#adb5bd',
        'hs-border': '#495057'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      },
      fontSize: {
        'xs': '11px',
        'sm': '12px',
        'base': '13px',
        'lg': '14px'
      }
    },
  },
  plugins: [],
}