/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFF0',
        cream: '#F5EFE0',
        cream2: '#F3E9D2',
        beige: '#E8DCC3',
        beige2: '#D9C7A7',
        gold: '#C9A24B',
        goldLight: '#E5C878',
        charcoal: '#4A3F35',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 50px -18px rgba(74, 63, 53, 0.28), 0 4px 18px -6px rgba(74, 63, 53, 0.12)',
        soft: '0 10px 30px -12px rgba(74, 63, 53, 0.2)',
      },
    },
  },
  plugins: [],
};
