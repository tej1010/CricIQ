/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EEC76A',       // Golden Yellow
        secondary: '#B8752B',     // Rich Brown
        accent: '#FFF5DC',        // Light Gold Tint
        background: {
          DEFAULT: '#FFFFFF',     // White
          dark: '#111827',        // Dark background
        },
        text: {
          DEFAULT: '#000000',     // Black
          light: '#FFFFFF',       // White for dark mode
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};