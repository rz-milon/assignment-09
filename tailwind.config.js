/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/img/education-day.jpg')",
      }
    }
  },
  plugins: [],
}
