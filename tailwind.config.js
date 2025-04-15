/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Circular TT Book', 'system-ui', 'sans-serif'],
        circular: ['Circular STD', 'sans-serif'],
        'circular-std': ['Circular STD', 'sans-serif'],
        'circular-tt': ['Circular TT Book', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 