/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9) translateZ(0)",
          },
          "40%": {
            opacity: "1",
            transform: "scale(1.03) translateZ(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateZ(0)",
          },
        },
      },
      colors: {
        "primary-light-color": "#007bff",
        "secondary-light-color": "white",
        "primary-dark-color": "#1d1f21",
        "secondary-dark-color": "#ffffff",
      },
    },
    animation: {
      fadeIn: "fadeIn 8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
    },
  },
  plugins: [],
};
