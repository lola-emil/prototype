/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.html"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark", "light"]
  },
  plugins: [
    require("daisyui")
  ],
}

