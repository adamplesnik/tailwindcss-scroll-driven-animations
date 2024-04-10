import { BookText } from 'lucide-react'
import Code from '../components/Code'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import ProgressBarDemo from '../demos/ProgressBarDemo'
import RangeDemo from '../demos/RangeDemo'
import {
  appearDemo,
  appearKeyframes,
  progressBarDemo,
  progressBarKeyframes,
  rangeDemo,
  rangeKeyframes,
} from '../utils/demoExamples'
import AppearDemo from '../demos/AppearDemo'

const Demo = () => {
  return (
    <>
      <Heading size={2}>Demos</Heading>
      <Heading size={3} id="timeline">
        Anonymous Scroll Timeline
      </Heading>
      <Paragraph>
        This demo showcases how to create a simple progress bar just by adding one utility class to
        the element. We define the anonymous scroll timeline by adding <Code>.timeline</Code> to the
        progress bar.
      </Paragraph>
      <ProgressBarDemo />
      <CodeBlock language="html">{progressBarDemo}</CodeBlock>
      <CodeBlock language="css">{progressBarKeyframes}</CodeBlock>
      <Heading size={3} id="view-timeline">
        Anonymous View Timeline
      </Heading>
      <Paragraph>
        This demo showcases how to make the element appear after entering the view frame. We define
        the anonymous view timeline by adding <Code>.timeline-view</Code> to this element.
      </Paragraph>
      <AppearDemo />
      <CodeBlock language="html">{appearDemo}</CodeBlock>
      <CodeBlock language="css">{appearKeyframes}</CodeBlock>
      <Heading size={3} id="range">
        Range, Scope and Animation Timeline Name
      </Heading>
      <Paragraph>
        This demo showcases the usage of the plugin to reveal the navigation bar. The{' '}
        <Code>.view-timeline/navbar</Code> utility sets up the animation timeline, which is then
        scoped out of the defining element by <Code>.scope/navbar</Code>. The navigation bar is
        controlled by this timeline with the <Code>.timeline/navbar</Code> utility. Utility class{' '}
        <Code>.range-on-exit</Code> is set to limit the timeline duration.
      </Paragraph>
      <RangeDemo />
      <CodeBlock language="html">{rangeDemo}</CodeBlock>
      <CodeBlock language="css">{rangeKeyframes}</CodeBlock>
      <Heading size={3}>Conclusion</Heading>
      <Paragraph>
        To better understand the impact of each utility class in the demo, take a look at its code.
        These comparisons will help you visualize how selected class affect the animations. For a
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
