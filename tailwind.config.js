/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'bg-position': 'bg-position 2s linear infinite',
        'bounce-bottom': 'bounce-bottom 1s ease-in-out',
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
            'animation-timeline': (value, { modifier }) => {
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
            'timeline-scope': (value, { modifier }) => ({
              timelineScope: `--${modifier}`,
            }),
          },
          { values: { DEFAULT: '' }, modifiers: 'any' }
        )
      },

      {
        theme: {
          timelineValues: {
            DEFAULT: 'y',
            block: 'block',
            x: 'x',
          },
        },
      }
    ),
  ],
}
