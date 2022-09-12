/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twine: '#C29467',
        black_marlin: '#372617',
        irish_coffee: '#5F3F25',
        sidecar: '#F3E2BE',
      },
    },
  },
  plugins: [],
};
