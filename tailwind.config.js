/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Use the 'class' strategy
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
        caveat: ['Caveat', 'cursive'],
        nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
}
