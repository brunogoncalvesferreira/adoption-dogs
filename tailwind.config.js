/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      width: {
        "420px": "26.25rem",
      },
      height: {
        "550px": "34rem",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
}
