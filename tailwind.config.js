/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
      "source-serif-pro": ["Source Serif Pro", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
