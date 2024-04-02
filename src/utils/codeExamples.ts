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

export const codeExampleRange = `{
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
}`

export const codeExampleScope = `scope: (value, { modifier }) => ({
  timelineScope: \`--\${modifier}\`,
}),`

export const codeExampleSupports = `supports: {
  animations: 'animation-timeline: scroll(y)',
  'no-animations': 'not(animation-timeline: scroll(y))',
}`

export const codeExampleDemo = `<div class="scope/demo">
  <!-- The --demo timeline has scope outside its defining element. -->
  <div class="animate-translate-down timeline/demo range-start-exit-crossing range-end">
    <!-- Controlled by the --demo timeline. -->
  </div>
  <div>
    ...
    <div className="view-timeline/demo">
      <!-- Element setting the --demo timeline. -->
    </div>
    ...
  </div>
</div>`
