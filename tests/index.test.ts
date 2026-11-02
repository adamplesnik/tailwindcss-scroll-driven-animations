import { expect, test } from 'vitest'
import { expectedCss } from './expect'
import { run, strip } from './utils'
import { contentToTest } from './content'

test('Test all util combinations and @support', async () => {
  const result = await run('', contentToTest)
  expect(strip(result.css)).toEqual(strip(expectedCss))
})
