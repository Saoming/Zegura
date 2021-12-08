module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightDark: '#111213',
      },
      fontFamily: {
        CenturyGothic: ['CenturyGothic'],
        sans: ['Karla', 'sans-serif'],
        mono: ['Oxygen Mono', 'monospace']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
