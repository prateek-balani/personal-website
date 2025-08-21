/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  centra: ['Centra', 'sans-serif'],
  kindly: ['"Kindly Rewind"', 'sans-serif'],
  sans: ['"Kindly Rewind"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

