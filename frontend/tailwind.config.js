/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      openmenu:  'openmenu 1s ease-in',
      closemenu:  'closemenu 1s ease-in',
  },
  keyframes: {
      openmenu: {
      // initial position
          '0%': {left:  '-200px'},
      // final position
          '100%': {left:  '0px'}
      },
      closemenu: {
      // initial position
          '0%': {left:  '0px'},
      // final position
          '100%': {left:  '-500px'}
      },
  }
  },
  plugins: [],
}

