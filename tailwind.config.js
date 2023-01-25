/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redHatDisplay: "Red Hat Display"
      },
      colors: {
        primary: "#546A76",
        secondary: "#8AAEC2",
        tertiary: "#3A6F8C",
        four: "#4F9AC2",
        five: "#2F3C42"
      },
    },
  },
  plugins: [],
}
