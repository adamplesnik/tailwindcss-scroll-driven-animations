import { CornerRightDown, Github } from 'lucide-react'
import Code from '../components/Code.tsx'
import CodeBlock from '../components/CodeBlock.tsx'
import Heading from '../components/Heading.tsx'
import Link from '../components/Link.tsx'
import Paragraph from '../components/Paragraph.tsx'
import {
  codeExampleRange,
  codeExampleScope,
  codeExampleSupports,
  codeExampleTimeline,
  codeExampleView,
} from '../scroll-driven-animations/codeExamples.ts'

const Animations = () => {
  return (
    <>
      <Heading size={2} id={'animations'}>
        Animations
      </Heading>
      <Paragraph>
        I remember being yelled at by a senior Java developer when I proudly integrated some atomic
        classes into our dinosaur project. It was back in 2018, I didn’t back out and our collection
        of Tailwind CSS classes has been growing every day.
      </Paragraph>
      <Paragraph>
        One of many stand-out features of Tailwind CSS is how it guides me to utilize edge CSS
        features simply by exploring its documentation.{' '}
        <Link href={'#code'} Icon={CornerRightDown} target={''}>
          Scroll-driven animations
        </Link>{' '}
        you plan to introduce are no exception to this. So I gave it a shot and turned some of their
        CSS into a plugin. This website is the real test; it uses them a lot.
      </Paragraph>
      <Heading size={3} id={'code'}>
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
          'https://github.com/adamplesnik/tailwind-job/blob/e8b3fd14b40b96ccce55ae1846bc7d09d1af6a86/tailwind.config.js#L40'
        }
        linkText={'XXXXX'}
      >
        {codeExampleTimeline}
      </CodeBlock>
      <Heading size={3}>Scroll and View Timeline</Heading>
      <Paragraph>
        Scroll and View timelines provide user with better control over the animations. Both{' '}
        <Code>.scroll-timeline</Code> and <Code>.view-timeline</Code> are meant to be used with
        modifiers to set the timeline name.
      </Paragraph>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwind-job/blob/e8b3fd14b40b96ccce55ae1846bc7d09d1af6a86/tailwind.config.js#L113'
        }
        linkText={'LINKKKKKKKKK XXXXXX'}
      >
        {codeExampleView}
      </CodeBlock>
      <Heading size={3}>Range</Heading>
      <Paragraph>
        Animation range controls start and end of an animation. Utility classes{' '}
        <Code>.range-start</Code> and <Code>.range-end</Code> can be used for setting the start and
        the end of the range. They default to <Code>entry</Code> and <Code>exit</Code> respectively.
      </Paragraph>
      <CodeBlock
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwind-job/blob/e8b3fd14b40b96ccce55ae1846bc7d09d1af6a86/tailwind.config.js#L113'
        }
        linkText={'LINKKKKKKKKK XXXXXX'}
      >
        {codeExampleRange}
      </CodeBlock>
      <Heading size={3}>Scope</Heading>
      <Paragraph>
        Timeline scope allows to control animated elements outside the parent which defines the
        timeline. Utility <Code>.scope</Code> should be used with a modifier to define the timeline
        name set by <Code>.scroll-timeline</Code> or <Code>.view-timeline</Code>.
      </Paragraph>
      <CodeBlock>{codeExampleScope}</CodeBlock>
      <Heading size={3}>Browser Support</Heading>
      <Paragraph>
        Scroll-driven animations are not broadly supported yet. I added two <Code>@supports</Code>{' '}
        rules to use them as modifiers for fallback styling.
      </Paragraph>
      <CodeBlock
        Icon={Github}
        linkHref={'https://github.com/adamplesnik/tailwind-job/tailwind.config.js#L16'}
        linkText={'LINKKKKKKKKK XXXXXX'}
      >
        {codeExampleSupports}
      </CodeBlock>
    </>
  )
}

export default Animations
