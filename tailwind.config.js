/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary1: "#E8ECF5",
        primary2: "#C8D2E7",
        primary6: "#1A4499",
        // Neutral colors
        NeutralN10: "#FAFAFA",
        NeutralN30: "#EBEBEB",
        NeutralN300: "#575757",
      },
    },
  },
  plugins: [],
};
