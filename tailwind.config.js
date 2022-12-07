/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brightOrange: '#FF7000',
        darkBackground: '#1B2430',
        textGray: '#536162',
        offWhite: '#DDDDDD',
        
      },
      fontFamily: {
        'librebaskerville': ['Libre Baskerville', 'sans-serif'],
        'vollkorn': ['Vollkorn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
