/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
  plugins: [
    require('@adam.plesnik/tailwindcss-scroll-driven-animations'),
    plugin(function ({ matchUtilities }) {
      matchUtilities(
        {
          range: (value, { modifier }) => ({
            animationRange: splitAndCombine(value, modifier),
          }),
        },
        {
          values: {
            DEFAULT: 'cover cover',
            'on-entry': 'entry entry',
            'on-exit': 'exit exit',
            contain: 'contain contain',
          },
          modifiers: 'any',
        }
      )
    }),
  ],
}

function splitAndCombine(values, modifiers) {
  const valueArray = values && values.split(' ')
  const modifierArray = modifiers ? modifiers.split(',') : '0,100%'.split(',')
  return valueArray[0] + ' ' + modifierArray[0] + ' ' + valueArray[1] + ' ' + modifierArray[1]
}
