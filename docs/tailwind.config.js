/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: {
    relative: true,
    files: ['./index.html', './src/**/*.{ts,tsx}'],
  },
  theme: {
    extend: {
      animation: {
        gradient: 'gradient auto ease-in-out forwards',
        reveal: 'reveal auto ease-in-out forwards',
        rise: 'rise auto cubic-bezier(0.57, 0.1, 0.46, 0.99) forwards',
        'scale-y': 'scale-y auto ease-in forwards',
      },
    },
  },
  plugins: [require('@adam.plesnik/tailwindcss-scroll-driven-animations')],
}
