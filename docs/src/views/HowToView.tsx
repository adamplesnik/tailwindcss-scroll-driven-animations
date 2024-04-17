import Code from '../components/Code'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import TimelineOverrideDemo from '../demos/TimelineOverrideDemo'
import Page from '../layouts/Page'
import Installation from '../partials/Installation'
import MainTitle from '../partials/MainTitle'
import { keyframes101, keyframes102, keyframes103 } from '../utils/demoExamples'

const HowToView = () => {
  return (
    <Page>
      <MainTitle />
      <Paragraph>
        Unofficial and experimental plugin for Tailwind CSS v3.4+ that provides utilities for
        scroll-driven animations.
      </Paragraph>
      <Installation />
      <Heading size={2} id="documentation-101">
        How to Make Your CSS Animation Scroll-driven
      </Heading>
      <Paragraph>
        CSS animations consist of two components, a set of keyframes and a style describing the
        animation. Let's declare a simple <Code>translate-down</Code> keyframe set and apply it to
        an element we want to control by a scroll timeline.
      </Paragraph>
      <CodeBlock language="css">{keyframes101}</CodeBlock>
      <CodeBlock language="html">{keyframes102}</CodeBlock>
      <Paragraph>
        To effectively control the animation, make sure to declare the timeline in the code after
        the animation. By default, the shorthand <Code>animation</Code> property sets the{' '}
        <Code>animation-timeline: auto</Code> unless set otherwise. However, using this plugin and
        Tailwind CSS animations ensures that the declaration order is correct.
      </Paragraph>
      <CodeBlock language="css">{keyframes103}</CodeBlock>
      <Paragraph>Scroll the container.</Paragraph>
      <TimelineOverrideDemo />
    </Page>
  )
}

export default HowToView
