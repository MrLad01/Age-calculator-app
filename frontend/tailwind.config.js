/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "off-white" : "hsl( 0, 0%, 94%) ",
        "off-black" : "hsl(0, 0%, 8%)",
        "purple" : "hsl(259, 100%, 65%)",
        "light-red" : "hsl(0, 100%, 67%)"
      },
      screens: {
        'xs' : '325px'
      }
    },
  },
  plugins: [],
}

