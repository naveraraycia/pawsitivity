/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Prompt', 'sans-serif'],
      },
      colors: {
        sky: '#DDFDFE',
        'sky-darker': '#308FBC',
        'line-blue': '#519DC1',
        slate: '#5B6475',
        'highlight-yellow': '#F5FF81',
        'pastel-yellow': '#FEFFEF',
        'lighter-pink': '#F9EAEE',
        'light-pink': '#FCE6E6',
        'dark-blue': '#80E8FF',
        'lavender': '#E7CEE3'
      }
    },
  },
  plugins: [],
}