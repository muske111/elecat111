/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Audiowide', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Custom color palette
        primary: {
          50: '#f9f5ff',
          100: '#f1e8ff',
          200: '#e4d3ff',
          300: '#cfb1ff',
          400: '#b582ff',
          500: '#9a4dff',
          600: '#8622ff',
          700: '#7610ea',
          800: '#6312c7',
          900: '#520fa3',
          950: '#35086e',
        },
        secondary: {
          50: '#fdfce9',
          100: '#fbf7c5',
          200: '#f9ef8c',
          300: '#f6e349',
          400: '#f4d81b',
          500: '#e7c30d',
          600: '#c69a08',
          700: '#9d7109',
          800: '#835710',
          900: '#704814',
          950: '#402506',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1)',
      },
    },
  },
  plugins: [],
};