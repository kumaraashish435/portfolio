/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D7263D', // Red
        navy: '#02182B',    // Navy
        blue: '#0197F6',    // Blue
        teal: '#448FA3',    // Teal
        lightblue: '#68C5DB', // Light Blue
        dark: '#252627',    // Dark Gray
        offwhite: '#FFF9FB', // Off White
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
} 