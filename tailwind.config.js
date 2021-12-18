module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'Open Sans'],
      description: ['Helvetica', 'sans-serif'],
    },
    boxShadow: {
      'custom-light': ' 0 0 10px #111111',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#07E363',
        },
        wood: {
          DEFAULT: '#563232',
          white: '#e7cfb4',
          red: '#84240c',
        },
        'hmif-yellow': '#F8C033',
        'cnc-yellow': '#F5CC2C',
        dark: {
          DEFAULT: '#010101',
          100: '#0A0B0E',
          200: '#16181D',
          300: '#16181D',
          500: '#0F1115',
          700: '#202125',
          800: '#232428',
          900: '#35363D',
          1000: '#5b5a5a',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
