/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff4655', //merah
        secondary: '#0f1923', //biru
        third: '#ece8e1', //cream
        fourth: '#768079', //untuk teks 
      },

      fontFamily: {
        tungsten: ['TUNGSTEN'],
        din: ['DIN'],
        dinBold: ['DINBOLD'],
      },
    },
  },
  plugins: [],
}
