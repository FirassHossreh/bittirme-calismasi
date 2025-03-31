/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light-color": "#007bff",
        "secondary-light-color": "white",
        "primary-dark-color": "#1d1f21",
        "secondary-dark-color": "#ffffff",
      },
    },
  },
  plugins: [],
};
