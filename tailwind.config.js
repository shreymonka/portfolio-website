/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
      },
      // Add these new sections inside extend
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(45,88,87,0.2)'
          },
          '100%': {
            boxShadow: '0 0 20px rgba(45,88,87,0.4)'
          }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'glow': 'glow 0.5s ease-in-out infinite alternate'
      }
    },
  },
  plugins: [],
}