const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT( {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['"Baloo Da 2"', 'sans-serif'],
        // Add other font families as needed
      },
      backgroundImage: {
        'brownBackground': "url('../public/brownBg1.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});
