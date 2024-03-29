import plugin from 'tailwindcss/plugin'

module.exports = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        timeline: (value, { modifier }) => ({
          animationTimeline: modifier ? `--${modifier}` : value,
        }),
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
        'scroll-timeline': (value, { modifier }) => ({
          scrollTimeline: (modifier ? `--${modifier} ` : 'none ') + value,
        }),
      },
      {
        values: theme('timelineValues'),
        modifiers: 'any',
      }
    )

    matchUtilities(
      {
        'view-timeline': (value, { modifier }) => ({
          viewTimeline: (modifier ? `--${modifier} ` : 'none ') + value,
        }),
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
      {
        values: {
          DEFAULT: 'entry',
          exit: 'exit',
          normal: 'normal',
          contain: 'contain',
          cover: 'cover',
          'entry-crossing': 'entry-crossing',
          'exit-crossing': 'exit-crossing',
        },
        modifiers: 'any',
      }
    )

    matchUtilities(
      {
        'range-end': (value) => ({
          animationRangeEnd: value,
        }),
      },
      {
        values: {
          DEFAULT: 'exit',
          entry: 'entry',
          normal: 'normal',
          contain: 'contain',
          cover: 'cover',
          'entry-crossing': 'entry-crossing',
          'exit-crossing': 'exit-crossing',
        },
      }
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
)
