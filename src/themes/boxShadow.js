const { boxShadow: defaultBoxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
  ...defaultBoxShadow,
  ...{
    base: '0px -25px 100px 0px rgba(16, 16, 16, 0.51)'
  }
};
