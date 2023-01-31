
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
      },
      width: {
        'addUser': '218.4px',
      }
    },
  },
  plugins: [
  ]
})
