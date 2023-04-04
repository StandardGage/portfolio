/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '811px'},
      'md': {'min': '812px', 'max': '1023px'},
      'lg': '1024px'
    },
    extend: {},
    fontFamily: {
      proza: ['Proza Libre', 'sans-serif'],
      taviraj: ['Taviraj', 'serif'],
      telex: ['Telex', 'sans-serif']
    }
  },
  plugins: [],
}
