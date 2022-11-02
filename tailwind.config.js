/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      phone: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1200px",
    },
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
