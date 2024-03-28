export const codeExampleTimeline = `timeline: (value, { modifier }) => ({
  'animation-timeline': modifier ? \`--\${modifier}\` : value,
}),`

export const codeExampleView = `'view-timeline': (value, { modifier }) => ({
  viewTimeline: (modifier ? \`--\${modifier} \` : 'none ') + value,
}),`

export const codeExampleRange = `'range-start': (value) => ({
    animationRangeStart: value,
  }),
},
{ values: { DEFAULT: 'entry', exit: 'exit', ...theme('rangeValues') } }`

export const codeExampleScope = `{
  scope: (value, { modifier }) => ({
    timelineScope: \`--\${modifier}\`,
  }),
  },`

export const codeExampleSupports = `supports: {
  animations: 'animation-timeline: scroll(y)',
  'no-animations': 'not(animation-timeline: scroll(y))',
}`
