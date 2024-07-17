/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontfamily:{
        Playfair: "'Playfair Display',serif",
        lato: "'Lato ',sans-serif"
      }
    },
  },
  plugins: [],
}