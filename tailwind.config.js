/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
      "style-script": ["Style Script", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
