const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
};
