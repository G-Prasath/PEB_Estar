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
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '33.33%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-100%)' },
          '83.33%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      animation: {
        slide: 'slide 5s infinite',
      },
    },
    colors: {
      primary: "#065665",
      secondary: "#0c8898",
      white: "#fff",
      black: "#000",
      footer: "#04344E",
      mini_footer: "#085D72",
      
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
}