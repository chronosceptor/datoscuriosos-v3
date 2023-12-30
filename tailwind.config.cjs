/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "t-",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        black: "#181818",
        dark: "#272726",
        grey: "#B5B3A7",
        white: "#F5F3E4",
        primary: "#2DDB6F",
      },
      fontFamily: {
        p: [
          "'Monument', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        ],
        s: ["'IBM Plex Mono', monospace"],
      },
    },
  },
  plugins: [],
};
