/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          'widescreen': {'raw':'(min-aspect-ratio:3/2'},   // Custom wide screen
          'tallscrenn': {'raw':'(min-aspect-ratio:1/2'},  // Custom small screen
        },
        keyframes: {
          'open-menu': {
              '0%': { transform: 'scaleY(0)' },
              '80%': { transform: 'scaleY(1.2)' },
              '100%': { transform: 'scaleY(1)' },
          },
      },
      animation: {
          'open-menu': 'open-menu 0.5s ease-in-out forwards'
      },
      },
    },
    plugins: [],
  }
  