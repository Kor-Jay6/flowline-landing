/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14161F',
        paper: '#F7F6F2',
        muted: '#6B7280',
        teal: '#2DD4BF',
        violet: '#7C6FF0',
        gold: '#E8B34C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
