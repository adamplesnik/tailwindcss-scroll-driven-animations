export const codeExampleTimeline = `matchUtilities(
  {
    timeline: (value, { modifier }) => ({
      'animation-timeline': modifier ? \`--\${modifier}\` : value,
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
)`

export const codeExampleView = `'view-timeline': (value, { modifier }) => ({
  viewTimeline: (modifier ? \`--\${modifier} \` : 'none ') + value,
}),`

export const codeExampleRange = `'range-start': (value) => ({
    animationRangeStart: value,
  }),
},
{ values: { DEFAULT: 'entry', exit: 'exit', ...theme('rangeValues') } }`

export const codeExampleScope = `scope: (value, { modifier }) => ({
  timelineScope: \`--\${modifier}\`,
}),`

export const codeExampleSupports = `supports: {
  animations: 'animation-timeline: scroll(y)',
  'no-animations': 'not(animation-timeline: scroll(y))',
}`
