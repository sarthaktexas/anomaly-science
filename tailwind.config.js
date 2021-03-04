module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        anomaly: 'Accuratist, sans-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
