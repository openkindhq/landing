/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-poppins)", fontFamily.sans],
        heading: ["var(--font-rhd)", fontFamily.sans],
      },
    },
  },
  plugins: [],
};
