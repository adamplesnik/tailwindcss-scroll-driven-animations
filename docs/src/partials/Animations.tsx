import { Github } from 'lucide-react'
import CodeBlock from '../components/CodeBlock.tsx'
import Heading from '../components/Heading.tsx'
import {
  codeExampleRange,
  codeExampleScope,
  codeExampleSupports,
  codeExampleTimeline,
  codeExampleView,
} from '../utils/codeExamples.ts'

const Animations = () => {
  return (
    <>
      <Heading size={1} id={'plugin'}>
        Tech
      </Heading>
      <Heading size={3} id={'code'} href="/docs#documentation-animation-timeline">
        Animation Timeline
      </Heading>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwindcss-scroll-driven-animations/blob/main/src/index.ts#L5'
        }
        linkText={'tailwindcss-scroll-driven-animations/src/index.ts'}
      >
        {codeExampleTimeline}
      </CodeBlock>
      <Heading size={3} href="/docs#documentation-scroll-timeline">
        Scroll and View Timeline
      </Heading>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwindcss-scroll-driven-animations/blob/main/src/index.ts#L37'
        }
        linkText={'tailwindcss-scroll-driven-animations/src/index.ts'}
      >
        {codeExampleView}
      </CodeBlock>
      <Heading size={3} href="/docs#documentation-range">
        Range
      </Heading>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwindcss-scroll-driven-animations/blob/main/src/index.ts#L56'
        }
        linkText={'tailwindcss-scroll-driven-animations/src/index.ts'}
      >
        {codeExampleRange}
      </CodeBlock>
      <Heading size={3} href="/docs#documentation-scope">
        Scope
      </Heading>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwindcss-scroll-driven-animations/blob/main/src/index.ts#L49'
        }
        linkText={'tailwindcss-scroll-driven-animations/src/index.ts'}
      >
        {codeExampleScope}
      </CodeBlock>
      <Heading size={3} href="/docs#documentation-fallback">
        Fallback Styling
      </Heading>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwindcss-scroll-driven-animations/blob/main/src/index.ts#L73'
        }
        linkText={'tailwindcss-scroll-driven-animations/src/index.ts'}
      >
        {codeExampleSupports}
      </CodeBlock>
    </>
  )
}

export default Animations
