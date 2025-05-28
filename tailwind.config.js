/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        gold: '#B8860B',
        'gold-light': '#D4A935',
        'gold-dark': '#8E6808',
        stone: {
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1931143/pexels-photo-1931143.jpeg')",
        'about-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/7195292/pexels-photo-7195292.jpeg')",
      },
    },
  },
  plugins: [],
};