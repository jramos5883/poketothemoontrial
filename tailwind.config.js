/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./node_modules/tw-elements/dist/**/*.js"],

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
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tw-elements/dist/plugin"),
  ],
};
