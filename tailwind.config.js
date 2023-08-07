/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#1c1b1f',
      'white': '#ededed',
      'red': '#95171d',
      'grey': '#343434',
    },
    extend: {},
  },
  plugins: [],
}
// black = #1c1b1f
// red = #95171d
// white = #ededed
// grey = #343434