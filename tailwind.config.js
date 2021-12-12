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
    extend: {
      colors: {
        green: {
          DEFAULT: '#07e363'
        }
      },
    },
  },
  plugins: [],
};
