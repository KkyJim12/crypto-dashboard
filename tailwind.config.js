const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      main: "#1d2635",
      secondary: "#0d1c27",
      minor: "#3b4961",
      third: "#1e2d3d",
      info: "#828ea1",
      success: "#05ab63",
      danger: "#eb4d5c",
      orange: "#f67e2f",
    },
    rotate: {
      90: "90deg",
      270: "270deg",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
