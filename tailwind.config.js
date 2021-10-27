const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'cover-dark': "url('/src/cover-dark.jpg')",
        'producing': "url('/src/producing.JPG')",
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      backdropBlur: {
        xs: '2px',
      },
      grayscale: {
        60: '60%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}