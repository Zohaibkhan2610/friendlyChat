/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'cal-custom' : 'calc(100vh - 50px)',
      }
    },
  },
  plugins: [],
}