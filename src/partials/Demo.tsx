import { BookText, WandSparkles } from 'lucide-react'
import Code from '../components/Code'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import PluginDemo from '../components/PluginDemo'
import { codeExampleDemo } from '../utils/codeExamples'

const Demo = () => {
  return (
    <>
      <Heading size={2} id="demo">
        Demo
      </Heading>
      <Paragraph>
        This demo showcases the usage of the plugin to reveal the navigation bar. The{' '}
        <Code>.view-timeline/demo</Code> utility sets up the animation timeline, which is then
        scoped out of the defining element by <Code>.scope/demo</Code>. The navigation bar has the{' '}
        <Code>.timeline/demo</Code> CSS class, enabling it to be regulated by the timeline. Utility
        classes <Code>.range-start-exit-crossing</Code> and <Code>.range-end</Code> is set to limit
        the timeline duration.
      </Paragraph>
      <div className="mb-4 hidden gap-4 rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm supports-no-animations:flex dark:border-amber-600 dark:bg-stone-700/30">
        <WandSparkles className="size-8 text-amber-500 dark:text-amber-600" strokeWidth="1" />
        Scroll-driven animations are not yet supported by your browser. Use Chrome 115 or newer to
        see the demo working correctly.
      </div>
      <PluginDemo />
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
      <CodeBlock language="html">{codeExampleDemo}</CodeBlock>
    </>
  )
}

export default Demo
