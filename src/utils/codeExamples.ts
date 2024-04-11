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

export const codeExampleRange = `matchUtilities(
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
)`

export const codeExampleScope = `scope: (value, { modifier }) => ({
  timelineScope: \`--\${modifier}\`,
}),`

export const codeExampleSupports = `addVariant('no-animations', '@supports not (animation-range: cover)')`
