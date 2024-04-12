/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: ['./index.html', './src/**/*.{ts,tsx}'],
  },
  theme: {
    extend: {},
  },
  plugins: [require('@adam.plesnik/tailwindcss-scroll-driven-animations')],
}
