import { expect, test } from 'vitest'
import { css, html, run } from './utils'

test('Test', async () => {
  let config = {
    content: [
      {
        raw: html`
          <div>
            <div class="timeline"></div>
            <div class="timeline-auto"></div>
            <div class="timeline-none"></div>
            <div class="timeline-scroll-x"></div>
            <div class="timeline-view"></div>
            <div class="timeline/test"></div>
          </div>
        `,
      },
    ],
    theme: {},
    corePlugins: { preflight: false },
  }

  let input = `
    @tailwind utilities;
  `

  const result = await run(input, config)
  expect(result.css).toMatch(css`
    .timeline {
      animation-timeline: scroll(y);
    }
    .timeline-auto {
      animation-timeline: auto;
    }
    .timeline-none {
      animation-timeline: none;
    }
    .timeline-scroll-x {
      animation-timeline: scroll(x);
    }
    .timeline-view {
      animation-timeline: view();
    }
    .timeline\/test {
      animation-timeline: --test;
    }
  `)
})
