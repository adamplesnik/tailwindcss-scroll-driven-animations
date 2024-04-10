import plugin from 'tailwindcss/plugin'

export = plugin(
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

function splitAndCombine(values: string, modifiers: string | null) {
  const defaultValueArray = ['0', '100%']
  const valueArray = (values || '').split(' ')
  const modifierArray = (modifiers || defaultValueArray.join(',')).split(',')

  const combinedValues = [valueArray[0], modifierArray[0], valueArray[1], modifierArray[1]]

  return combinedValues.join(' ')
}
