/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        /* Regular CSS animations */
        'move-left': 'move-left 400ms ease-in-out forwards',
        'move-right': 'move-right 400ms ease-in-out forwards',
        'bounce-bottom': 'bounce-bottom 550ms ease-in-out 220ms',

        /* Scroll-driven animations */
        'add-shadow': 'add-shadow auto linear forwards',
        'bg-position': 'bg-position auto linear forwards',
        demo: 'translate-down auto ease-in-out forwards',
        'translate-down': 'translate-down auto cubic-bezier(0.65, 0.05, 0.17, 0.99) forwards',
        'translate-up': 'translate-up auto ease-in-out forwards',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.26, 0.53, 1, 0.63)',
        line: 'cubic-bezier(0.65, 0.05, 0.17, 0.99)',
      },
    },
    supports: {
      animations: 'animation-timeline: scroll(y)',
      'no-animations': 'not(animation-timeline: scroll(y))',
    },
  },
  plugins: [require('@adam.plesnik/taiwlindcss-scroll-driven-animations')],
}
