/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#E1F5EE',
          100: '#C8EDDE',
          200: '#9FE1CB',
          300: '#5DCAA5',
          400: '#1D9E75',
          500: '#0F6E56',
          600: '#0A5443',
          700: '#085041',
          800: '#04342C',
          900: '#022420',
        },
        brand: '#0F6E56',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
