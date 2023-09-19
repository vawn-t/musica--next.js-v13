const {
  borderRadius: defaultBorderRadius
} = require('tailwindcss/defaultTheme');

module.exports = {
  ...defaultBorderRadius,
  ...{
    DEFAULT: '0.8rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem'
  }
};
