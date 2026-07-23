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
          DEFAULT: '#7C8660', // Deep Sage
          hover: '#636B4D',
          light: '#EDF0E8',
        },
        secondary: {
          DEFAULT: '#D89A5A', // Terracotta
          hover: '#C28448',
          light: '#F7ECDC',
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
          DEFAULT: '#EADCB9', // Darker Warm Beige Background
          dark: '#D8C6A5',    // Darker Sand
          deep: '#C2B090',    // Darker Warm Stone Deep
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
