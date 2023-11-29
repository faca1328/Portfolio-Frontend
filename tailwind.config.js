/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
  
      'sm': '620px',

      'md': '910px'
    },
    extend: {
      screens: {
        'phone': '440px',
        
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '70%': { transform: 'translate3d(0, -10px, 0)' },
          '90%': { transform: 'translate3d(0, -5px, 0)' },

        },
      },
      animation: {
        'bounce-arrow': 'bounce 1s linear 2',
      },
    },
  },
  plugins: [],
}