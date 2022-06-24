/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    important: true,
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
