/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // background color
        background: "#f7f8fc",
        // Primary colors
        primary1: "#E8ECF5",
        primary2: "#C8D2E7",
        primary5: "#4366ab",
        primary6: "#1A4499",
        primary7: "#163A82",
        primary8: "#12306D",
        // Neutral colors
        NeutralN10: "#FAFAFA",
        NeutralN20: "#F5F5F5",
        NeutralN30: "#EBEBEB",
        NeutralN40: "#DEDEDE",
        NeutralN50: "#BFBFBF",
        NeutralN60: "#B0B0B0",
        NeutralN70: "#A3A3A3",
        NeutralN80: "#949494",
        NeutralN90: "#858585",
        NeutralN100: "#757575",
        NeutralN200: "#666",
        NeutralN300: "#575757",
        NeutralN400: "#4A4A4A",
        NeutralN500: "#3B3B3B",
        NeutralN600: "#2E2E2E",
        NeutralN700: "#1C1C1C",
        // magenta
        Magenta: "#E0144C",
        Red: "#ED5254",
        Red1: "#FBEBEB",
        Red6: "#D73333",
        // green
        Green6: "#3BA53D",
        Green7: "#328C34",
        // gray
        Gray4: "#515765",
        Gray2: "#959DB0",
      },
    },
  },
  plugins: [],
};
