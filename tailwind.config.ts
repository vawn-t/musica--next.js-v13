import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#307DB8',
        secondary: '#FACD66',
        light: '#EFEEE0',
        dark: '#1D2123',
        alt: '#A4C7C6',
        darkAlt: '#1A1E1F'
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        lg: '17px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '35px'
      },
      borderRadius: {
        DEFAULT: '0.8rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem'
      },
      boxShadow: {
        base: '0px -25px 100px 0px rgba(16, 16, 16, 0.51)'
      }
    }
  },
  plugins: []
};
export default config;
