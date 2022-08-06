/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          'orange': '#FB8C02',
          'purple': '#855CF8',
          'dark': '#4E3C94',
          'dorange': '#603500',
          'light' : '#F4F4F4'
        },
      },
    },
  },
  plugins: [],
}
