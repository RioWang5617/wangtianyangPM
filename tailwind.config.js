/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'MiSans': ['MiSans', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
