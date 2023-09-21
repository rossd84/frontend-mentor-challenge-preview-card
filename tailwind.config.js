/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "san-serif"],
      secondary: ["Fraunces", "serif"]
    },
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        darkBlue: 'hsl(212, 21%, 14%)',
        darkGrayBlue: 'hsl(228, 12%, 48%)'

      }
    },
  },
  plugins: [],
}