const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#2a2a2a",
            foreground: "#f6f6f6",
          },
        },
        light: {
          colors: {
            background: "#deebf8",
            foreground: "#2b2b2b", 
          }
        },
      },
    }),
  ],
};