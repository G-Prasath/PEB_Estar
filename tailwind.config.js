/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-bg': "url('/round.png')",
      },
    },
    colors: {
      primary: "#065665",
      secondary: "#0c8898",
      white: "#fff",
      black: "#000",
      footer: "#04344E",
      mini_footer: "#085D72"
      
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
}