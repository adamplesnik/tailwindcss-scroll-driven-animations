/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
import plugin from 'tailwindcss/plugin'

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
        'bounce-bottom': 'bounce-bottom 550ms ease-in-out 220ms',

        /* Scroll-driven animations */
        appear: 'appear auto cubic-bezier(0.65, 0.05, 0.17, 0.99) forwards',
        opacity: 'opacity 2s cubic-bezier(0.65, 0.05, 0.17, 0.99) forwards',
        'scale-to-right': 'scale-to-right auto linear forwards',
        'to-stroke-dashoffset-0': 'to-stroke-dashoffset-0 5s ease-in-out forwards',
        'translate-down': 'translate-down 3s cubic-bezier(0.65, 0.05, 0.17, 0.99) forwards',
        'translate-up': 'translate-up auto ease-in-out forwards',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.26, 0.53, 1, 0.63)',
        line: 'cubic-bezier(0.65, 0.05, 0.17, 0.99)',
      },
      keyframes: {
        'to-stroke-dashoffset-0': {
          to: { strokeDashoffset: 0 },
        },
      },
    },
  },
  plugins: [
    require('@adam.plesnik/tailwindcss-scroll-driven-animations'),
    plugin(function ({ matchUtilities, addVariant }) {
      matchUtilities(
        {
          'dash-offset': (value, { modifier }) => ({
            strokeDashoffset: modifier,
          }),
        },
        { values: { DEFAULT: '' }, modifiers: 'any' }
      )
      matchUtilities(
        {
          'dash-array': (value, { modifier }) => ({
            strokeDasharray: modifier,
          }),
        },
        { values: { DEFAULT: '' }, modifiers: 'any' }
      )
      addVariant('path', '& > path')
    }),
  ],
}
