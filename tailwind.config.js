module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'Open Sans'],
    },
    boxShadow: {
      'custom-light': ' 0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#07e363',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181D',
          300: '#16181D',
          500: '#0f1115',
          700: '#202125',
          800: '#232428',
          900: '#35363d',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
