import { BookText } from 'lucide-react'
import Code from '../components/Code'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import ProgressBarDemo from '../demos/ProgressBarDemo'
import RangeDemo from '../demos/RangeDemo'
import { progressBarDemo, rangeDemo } from '../utils/demoExamples'

const Demo = () => {
  return (
    <>
      <Heading size={2}>Demos</Heading>
      <Heading size={3}>Anonymous Scroll Timeline</Heading>
      <Paragraph>
        This demo showcases how to set a simple progress bar just by adding CSS to the page. We
        define the anonymous scroll timeline by adding <Code>.timeline</Code> to the progressbar.
      </Paragraph>
      <CodeBlock language="html">{progressBarDemo}</CodeBlock>
      <ProgressBarDemo />
      <Heading size={3}>Range and Animation Timeline Name</Heading>
      <Paragraph>
        This demo showcases the usage of the plugin to reveal the navigation bar. The{' '}
        <Code>.view-timeline/demo</Code> utility sets up the animation timeline, which is then
        scoped out of the defining element by <Code>.scope/demo</Code>. The navigation bar has the{' '}
        <Code>.timeline/demo</Code> CSS class, enabling it to be regulated by the timeline. Utility
        classes <Code>.range-start-exit-crossing</Code> and <Code>.range-end</Code> is set to limit
        the timeline duration.
      </Paragraph>
      <CodeBlock language="html">{rangeDemo}</CodeBlock>
      <RangeDemo />
      <Heading size={3}>Conclusion</Heading>
      <Paragraph>
        To better understand the impact of each utility class in the demo, take a look at its code
        below. This comparison will help you visualize how each class affects the animation. For a
        comprehensive overview of the topic, refer to the{' '}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations"
          Icon={BookText}
          target="_blank"
        >
          MDN documentation
        </Link>
        .
      </Paragraph>
    </>
  )
}

export default Demo
