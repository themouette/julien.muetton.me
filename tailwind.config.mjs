/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "rgba(0,0,0, .76)",
          secondary: "rgba(255,255,255, .76)",
        },
        border: {
          primary: "#e2e5ed",
          secondary: "#2c2b2b",
        },
        background: {
          primary: "#ffffff",
          secondary: "rgba(0,0,0, .76)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // In PageLayout this class is added to html when page is scrolled
      // This allows to use this modifier in tailwind classes.
      addVariant("page-scrolled", ".page-scrolled &");
    }),
  ],
};
