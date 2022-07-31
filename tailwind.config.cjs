/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
