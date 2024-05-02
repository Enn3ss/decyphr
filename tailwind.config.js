/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'pink': '#CCC9DC',
      'navy': {
        900: '#0C1821',
        700: '#1B2A41',
        500: '#324A5F',
      },  
    }
  },
  plugins: [],
}