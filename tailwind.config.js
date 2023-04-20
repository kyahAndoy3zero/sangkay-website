/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      'pink': '#f87171',
      'lightpink': '#fca5a5',
      'gray': ' #f2f2f2',
      'supergray': "#d8d8d8",
      'white': '#fff',
      'blue': '#0284c7',
      'deeppink': '#ef4444'

    },


    extend: {
      fontFamily: {
        'sans': ['Encode Sans Expanded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
