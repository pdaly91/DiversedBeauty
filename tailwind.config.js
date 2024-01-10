/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-light': '#ebe1d7',
        'main-middle': '#C1914D',
        'main-dark': '#6E4B2B',
        'main-black': '#120B08',
      },
    },
  },
  plugins: [],
};
