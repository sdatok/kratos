/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as necessary for your project structure
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#282c34', // Name your color as you wish
      },
    },
  },
  plugins: [],
}
