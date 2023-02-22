/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "open-sans": ["Open-Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#5c0000",
      },
    },
  },
  plugins: [],
};
