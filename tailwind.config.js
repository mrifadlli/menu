/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'primary' : ['Montserrat','sans-serif'],
        'secondary' : ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
