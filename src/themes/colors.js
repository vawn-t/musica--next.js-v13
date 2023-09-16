const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  ...defaultColors,
  ...{
    primary: '#307DB8',
    secondary: '#FACD66',
    light: '#EFEEE0',
    dark: '#1D2123',
    alt: '#A4C7C6',
    darkAlt: '#1A1E1F'
  }
};
