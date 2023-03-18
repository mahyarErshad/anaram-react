/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1: "#E8ECF5",
        primary2: "#C8D2E7",     
        NeutralN10: "#FAFAFA",
      }
    },
  },
  plugins: [],
}