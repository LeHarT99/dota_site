/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'myShadow': '0px 0px 35px 0px rgba(255, 255, 255, 1.00)'
      }
    },
  },
  plugins: [],
}
