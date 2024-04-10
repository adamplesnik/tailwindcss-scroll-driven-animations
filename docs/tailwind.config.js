/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  },
  theme: {
    extend: {
      animation: {
        appear: 'appear auto linear forwards',
        'slide-from-left': 'slide-from-left auto linear forwards',
        width: 'width auto linear forwards',
      },
    },
    supports: {
      animations: 'animation-timeline: scroll(y)',
      'no-animations': 'not(animation-timeline: scroll(y))',
    },
  },
  plugins: [require('@adam.plesnik/tailwindcss-scroll-driven-animations')],
}
