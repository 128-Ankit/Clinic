/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins"],
    },
    extend: {
      colors: {
        darkGreen: "#027d5d",
        lightGreen: "#eaf3fd",
        custom_green_1: "rgba(2, 125, 93, 0.15)",
        custom_green_2: "rgba(4, 227, 169, 0.15)",
      },
      screens: {
        'xs': '399px',
        'xs1':'641px',
        'xs2': '343px',
        'xs3': '180px',
        'xs4':'260px',
        'xs5':'430px'
      },
    },
  },
  plugins: [],
}

