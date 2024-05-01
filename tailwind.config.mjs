/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "rgba(0,0,0, .76)",
          secondary: "rgba(255,255,255, .54)",
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
  plugins: [],
};
