/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {},
    fontFamily: {
      proza: ['Proza Libre', 'sans-serif'],
      taviraj: ['Taviraj', 'serif'],
      telex: ['Telex', 'sans-serif']
    }
  },
  plugins: [],
}
