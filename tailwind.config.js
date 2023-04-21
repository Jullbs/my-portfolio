/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#F0F0F0',
        'gray-200': '#737373',
        'gray-300': '#a3a1a1',
        'gray-600': '#1d1d1d',
        'gray-t': '#2F2F2F',
        'baby-blue': '#87C9F9',
        'acid-green': '#14E956',
      },
      fontFamily: {
        'default': 'JetBrains Mono',
      },
      screens: {
        'x-sm': '440px',
      },
    },
  },
  plugins: [],
}
