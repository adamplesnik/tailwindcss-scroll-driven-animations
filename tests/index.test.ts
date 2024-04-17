import { expect, test } from 'vitest'
import { expectedCss } from './expect'
import { run, strip } from './utils'
import { contentToTest } from './content'

test('Test all util combinations and @support', async () => {
  let config = {
    content: [
      {
        raw: contentToTest,
      },
    ],
    theme: {},
    corePlugins: { preflight: false },
  }

  let input = String.raw`
    @tailwind utilities;
  `

  const result = await run(input, config)
  expect(strip(result.css)).toEqual(strip(expectedCss))
})
