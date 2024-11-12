/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"], // Define "Geist" como a fonte padrão
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Geist",
          src: 'url("/src/assets/fonts/geist.woff2") format("woff2"), url("/src/assets/fonts/geist.woff") format("woff")',
          fontWeight: "100 900",
          fontStyle: "normal",
        },
        body: {
          fontFamily: "Geist, sans-serif", // Aplica a fonte "Geist" ao body
        },
      });
    }),
  ],
};
