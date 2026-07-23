/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // Brand Saffron/Orange
          hover: '#EA580C',
          light: '#FFF7ED',
        },
        secondary: {
          DEFAULT: '#16A34A', // Brand Green
          hover: '#15803D',
          light: '#F0FDF4',
        },
        burgundy: {
          DEFAULT: '#7A2A2D', // Muted Burgundy
          hover: '#611F22',
          light: '#F8ECEE',
        },
        success: {
          DEFAULT: '#A8A16B', // Sage Green
          hover: '#8E8858',
          light: '#F3F2EA',
        },
        cream: {
          DEFAULT: '#FAF5EB', // Clean, bright light cream background
          dark: '#F5EBD7',    // Original soft warm beige from main footer
          deep: '#EADCB9',    // Darker sand for separators
          light: '#FAF5EB',
        },
        charcoal: {
          DEFAULT: '#2B2927', // Rich Charcoal text
          light: '#4E4A47',
          deep: '#1E1C1A',    // Deep Charcoal (prevents pure black)
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
