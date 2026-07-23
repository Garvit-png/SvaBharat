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
          DEFAULT: '#1A357F', // Ashoka Chakra Navy
          hover: '#13275C',
          light: '#E8ECF8',
        },
        secondary: {
          DEFAULT: '#C86E1A', // Deep Saffron
          hover: '#A85A14',
          light: '#FAF0E8',
        },
        success: {
          DEFAULT: '#3F7D49', // Heritage Green
          hover: '#2E5D36',
          light: '#EBF2ED',
        },
        cream: {
          DEFAULT: '#F4EFE3', // Warm Ivory / Paper
          dark: '#E4D7BE',    // Warm Beige
          deep: '#D2C1A3',
          light: '#FFFFFF',   // Pure White
        },
        charcoal: {
          DEFAULT: '#1E1E1E', // Rich Charcoal
          light: '#6B7280',   // Soft Gray
          deep: '#0F0F0F',
        },
        tricolour: {
          saffron: '#E38B2C',
          white: '#FCFBF8',
          green: '#2E7D32',
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
