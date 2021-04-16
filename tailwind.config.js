const production = !process.env.ROLLUP_WATCH;

module.exports = {
  // important: true,
  purge: {
    enabled: production,
    content: ['./app/**/*.tsx', './app/**/*.jsx', './app/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
