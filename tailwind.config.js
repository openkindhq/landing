/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@openkind/components/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-poppins)", fontFamily.sans],
        heading: ["var(--font-dm)", fontFamily.sans],
      },
      colors: {
        background: "#161717",
        foreground: "#1d1c1d",
        text: "#edecec",
      },
    },
  },
  plugins: [],
  presets: [require("@openkind/components/tailwind.config")],
};
