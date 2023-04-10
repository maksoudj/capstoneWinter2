
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  
],
  theme: {
    extend: {
      colors: {
        slate: {
          500: "#64748b",
          700: "#334155"

        },
        codeVa:{
          darkGreen: "#405730",
          green: "#75bf4a",
          lightGreen: "#add46e",
          vLightGreen: "#e3edc4",
          yellow: "#f2e58f",
          vDarkBlue: "#2e404a",
          darkBlue: "#36759c",
          blue: "#47b2e3",
          lightBlue: "#c4e8f0",
          orange: "#f58c26",
          white: "#ffffff"
        },
      },
      width: {
        'addUser': '218.4px',
      }
    },
  },
  plugins: [
  ]
})
