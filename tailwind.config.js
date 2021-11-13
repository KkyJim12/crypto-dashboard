const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "white",
      black: "black",
      gray: "#9CA3AF",
      transparent: "transparent",
      main: "#1d2635",
      secondary: "#0d1c27",
      minor: "#3b4961",
      third: "#1e2d3d",
      info: "#828ea1",
      success: "#05ab63",
      danger: "#eb4d5c",
      orange: "#f67e2f",
      regMain: "#673ab7",
      regMinor: "#fafafa",
      regThird: "#f9f9f9",
    },
    rotate: {
      90: "90deg",
      270: "270deg",
    },
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
  },
  variants: {
    extend: { scale: ["active"] },
  },
  plugins: [],
};
