/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
    variants: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};
