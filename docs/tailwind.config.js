/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: ['./index.html', './src/**/*.{ts,tsx}'],
  },
  theme: {
    extend: {
      animation: {
        gradient: 'gradient auto ease-in-out forwards',
      },
    },
  },
  plugins: [require('@adam.plesnik/tailwindcss-scroll-driven-animations')],
}
