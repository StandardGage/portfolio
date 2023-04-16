/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '800px'},
      'md': {'min': '801px', 'max': '1023px'},
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
