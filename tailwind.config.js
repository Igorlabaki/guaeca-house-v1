/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1C3F39',
        'green-secundary': '#2a696e',
        'gray-bg': '#978f7c',
        'black-pattern': "#121210",
        'white-pattern': '#e9eaef'
      },
      fontFamily: {
          'brandon-gro': [ "brandon-grotesque", 'sans-serif'],
          'futura-pt': [ "futura-pt", 'sans-serif']
      },
      backgroundImage: {
        'house-01': "url('/images/house-1.png')",
      },
      keyframes: {
        opacityEffect: {
          '0%': { opacity: 0.50 },
          '25%': { opacity: 0.75 },
          '75%': { opacity: 0.100 },
        },
        },
        animation: {
        'buttonReservar': 'opacityEffect .5s linear',
        }, 
    },
  },
  plugins: [],
};