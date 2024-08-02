/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-color-primary": "#da966e",
        "bg-admin-primary":"#19212C" // Thay đổi mã màu theo ý muốn
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs"), require("flowbite/plugin")],
  darkMode: "class",
};
