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
