/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        DEFAULT: "#794856",
      },
      colors: {
        tuscan: "#794856",
        pink: "#D5A7B4",
        blue: "#def3ff",
        red: "#DE5055",
        orange: "#DF7410",
        teal: "#2F4858",
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
      fontSize: {
        "6xl": ["4rem", { lineHeight: "72px" }],
      },
      letterSpacing: {
        widest: "0.5rem",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
