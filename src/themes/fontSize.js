const { fontSize: defaultFontSize } = require('tailwindcss/defaultTheme');

module.exports = {
  ...defaultFontSize,
  ...{
    sm: '12px',
    base: '14px',
    lg: '17px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '35px'
  }
};
