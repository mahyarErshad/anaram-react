/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary1: "#E8ECF5",
        primary2: "#C8D2E7",
        primary5: "#4366ab",
        primary6: "#1A4499",
        // Neutral colors
        NeutralN10: "#FAFAFA",
        NeutralN20: "#F5F5F5",
        NeutralN30: "#EBEBEB",
        NeutralN70: "#A3A3A3",
        NeutralN90: "#858585",
        NeutralN300: "#575757",
        NeutralN500: "#3B3B3B",
        NeutralN600: "#2E2E2E",
        NeutralN700: "#1C1C1C",
        // magenta
        Magenta: "#E0144C",
      },
    },
  },
  plugins: [],
};
