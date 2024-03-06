/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, display: "none" },
          "100%": { opacity: 1, display: "block" },
        },
        "fade-out": {
          "0%": { opacity: 1, display: "block" },
          "100%": { opacity: 0, display: "none" },
        },
      },
    },
  },
  plugins: [],
};
