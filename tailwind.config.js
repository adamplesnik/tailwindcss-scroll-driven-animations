/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['variant', ['@media (prefers-color-scheme: dark) { & }', '&:where(.dark, .dark *)']],
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'add-shadow': 'add-shadow auto linear forwards',
        'bg-position': 'bg-position auto linear forwards',
        'bounce-bottom': 'bounce-bottom 550ms ease-in-out 220ms',
        'move-left': 'move-left 400ms ease-in-out forwards',
        'move-right': 'move-right 400ms ease-in-out forwards',
        'translate-down': 'translate-down auto cubic-bezier(0.03, 0.6, 0, 1.1) forwards',
        'translate-up': 'translate-up auto ease-in-out forwards',
      },
      transitionTimingFunction: {
        'cubic-icon': 'cubic-bezier(0.26, 0.53, 1, 0.63)',
        'cubic-line': 'cubic-bezier(0.65, 0.05, 0.17, 0.99)',
      },
    },
  },
  plugins: [
    plugin(
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            timeline: (value, { modifier }) => {
              if (modifier) {
                return {
                  'animation-timeline': `--${modifier}`,
                }
              } else {
                return {
                  animationTimeline: value,
                }
              }
            },
          },
          {
            values: {
              DEFAULT: 'scroll(y)',
              auto: 'auto',
              none: 'none',
              'scroll-x': 'scroll(x)',
              view: 'view()',
            },
            modifiers: 'any',
          }
        )

        matchUtilities(
          {
            'scroll-timeline': (value, { modifier }) => {
              if (modifier) {
                return {
                  scrollTimeline: `--${modifier} ${value}`,
                }
              } else {
                return {
                  scrollTimeline: `none ${value}`,
                }
              }
            },
          },
          {
            values: theme('timelineValues'),
            modifiers: 'any',
          }
        )

        matchUtilities(
          {
            'view-timeline': (value, { modifier }) => {
              if (modifier) {
                return {
                  viewTimeline: `--${modifier} ${value}`,
                }
              } else {
                return {
                  viewTimeline: `none ${value}`,
                }
              }
            },
          },
          {
            values: theme('timelineValues'),
            modifiers: 'any',
          }
        )

        matchUtilities(
          {
            scope: (value, { modifier }) => ({
              timelineScope: `--${modifier}`,
            }),
          },
          { values: { DEFAULT: '' }, modifiers: 'any' }
        )

        matchUtilities(
          {
            'range-start': (value) => ({
              animationRangeStart: value,
            }),
          },
          { values: { DEFAULT: 'entry', exit: 'exit', ...theme('rangeValues') } }
        )

        matchUtilities(
          {
            'range-end': (value) => ({
              animationRangeEnd: value,
            }),
          },
          { values: { DEFAULT: 'exit', entry: 'entry', ...theme('rangeValues') } }
        )
      },

      {
        theme: {
          timelineValues: {
            DEFAULT: 'y',
            block: 'block',
            x: 'x',
          },
          rangeValues: {
            normal: 'normal',
            contain: 'contain',
            cover: 'cover',
          },
        },
      }
    ),
  ],
}
