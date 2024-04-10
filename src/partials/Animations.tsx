import { Github, Minus } from 'lucide-react'
import Code from '../components/Code.tsx'
import CodeBlock from '../components/CodeBlock.tsx'
import Heading from '../components/Heading.tsx'
import Paragraph from '../components/Paragraph.tsx'
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
      <Heading size={2} id={'plugin'}>
        Plugin
      </Heading>
      <Paragraph>
        The plugin provides utilities for a subset of CSS scroll-driven animation properties:
      </Paragraph>
      <ul className="mb-4">
        <li>
          <Minus className="inline" />
          <Code>animation-timeline</Code>
        </li>
        <li>
          <Minus className="inline" />
          <Code>scroll-timeline</Code>, <Code>view-timeline</Code>
        </li>
        <li>
          <Minus className="inline" />
          <Code>animation-range</Code>
        </li>
        <li>
          <Minus className="inline" />
          <Code>timeline-scope</Code>
        </li>
      </ul>

      <Heading size={3} id={'code'} href="/docs#documentation-animation-timeline">
        Animation Timeline
      </Heading>
      <Paragraph>
        The single most impressive feature of scroll-driven animations is an anonymous animation
        timeline. It allows user to easily trigger anything just by scrolling the page. Utility
        below allows user to use the <Code>.timeline</Code> CSS class which defaults to{' '}
        <Code>animation-timeline: scroll(y)</Code> and also provides an option to set custom
        timeline name with a modifier.
      </Paragraph>
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
      <Paragraph>
        Scroll and View timelines provide user with better control over the animations. Both{' '}
        <Code>.scroll-timeline</Code> and <Code>.view-timeline</Code> are meant to be used with
        modifiers to set the timeline name.
      </Paragraph>
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
      <Paragraph>
        Animation range controls start and end of an animation. Utility class <Code>.range</Code>{' '}
        offers multiple options with default value set to <Code>cover</Code>.
      </Paragraph>
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
      <Paragraph>
        Timeline scope allows to control animations outside the element which defines the timeline.
        Utility <Code>.scope</Code> should be used with a modifier to define the timeline name set
        by <Code>.scroll-timeline</Code> or <Code>.view-timeline</Code>.
      </Paragraph>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwindcss-scroll-driven-animations/blob/main/src/index.ts#L49'
        }
        linkText={'tailwindcss-scroll-driven-animations/src/index.ts'}
      >
        {codeExampleScope}
      </CodeBlock>
      <Heading size={3}>Browser Support</Heading>
      <Paragraph>
        Scroll-driven animations are not broadly supported yet. I added two <Code>@supports</Code>{' '}
        rules to use them as modifiers for fallback styling.
      </Paragraph>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwind-job-application/blob/main/tailwind.config.js#L28'
        }
        linkText={'tailwind-job-application/tailwind.config.js'}
      >
        {codeExampleSupports}
      </CodeBlock>
    </>
  )
}

export default Animations
