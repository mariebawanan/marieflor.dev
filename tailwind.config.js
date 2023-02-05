/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tuscan: "#794856",
        pink: "#D5A7B4",
        blue: "#def3ff",
      },
      fontFamily: {
        sans: [
          "Uxum",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
        ],
      },
    },
  },
  plugins: [],
};
