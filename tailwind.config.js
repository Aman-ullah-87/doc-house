/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main':'#F7A582',
        'secondary':'#07332F'
      },
      fontFamily:{
        'source':"'Source Sans 3', 'sans-serif'"
      }
    },
  },
  plugins: [],
}

