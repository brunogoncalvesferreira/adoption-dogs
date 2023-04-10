/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      width: {
        "500px": "31.25rem",
        "768px": "48rem",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
}
