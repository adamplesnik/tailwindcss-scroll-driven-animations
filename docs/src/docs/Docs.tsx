import { Minus } from 'lucide-react'
import Code from '../components/Code'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import MultiRangeDemo from '../demos/MultiRangeDemo'
import SupportsDemo from '../demos/SupportsDemo'
import {
  appearDemo,
  appearKeyframes,
  multiRange,
  multiRangeKeyframes,
  progressBarDemo,
  progressBarKeyframes,
  rangeDemo,
  rangeKeyframes,
  supports,
} from '../utils/demoExamples'
import DocsTable from './DocsTable'
import ProgressBarDemo from '../demos/ProgressBarDemo'
import AppearDemo from '../demos/AppearDemo'
import RangeDemo from '../demos/RangeDemo'

const animationTimelineClasses = [
  { className: 'timeline', code: 'animation-timeline: scroll(y)' },
  { className: 'timeline-scroll-x', code: 'animation-timeline: scroll(x)' },
  { className: 'timeline-view', code: 'animation-timeline: view()' },
  { className: 'timeline-auto', code: 'animation-timeline: auto' },
  { className: 'timeline-none', code: 'animation-timeline: none' },
  { className: 'timeline/{name}', code: 'animation-timeline: --{name}' },
]

const scopeClasses = [{ className: 'scope/{name}', code: 'timeline-scope: --{name}' }]

const rangeClasses = [
  { className: 'range', code: 'animation-range: cover 0% cover 100%' },
  { className: 'range-contain', code: 'animation-range: contain 0% contain 100%' },
  { className: 'range-on-entry', code: 'animation-range: entry 0% entry 100%' },
  { className: 'range-on-exit', code: 'animation-range: exit 0% exit 100%' },
  {
    className: 'range/{startValue}-{endValue}',
    code: 'animation-range: cover {value} cover {endValue}',
  },
]

const scrollTimelineClasses = [
  { className: 'scroll-timeline/{name}', code: 'scroll-timeline: --{name} y' },
  { className: 'scroll-timeline-x/{name}', code: 'scroll-timeline: --{name} x' },
  { className: 'scroll-timeline-block/{name}', code: 'scroll-timeline: --{name} block' },
]

const viewTimelineClasses = [
  { className: 'view-timeline/{name}', code: 'view-timeline: --{name} y' },
  { className: 'view-timeline-x/{name}', code: 'view-timeline: --{name} x' },
  { className: 'view-timeline-block/{name}', code: 'view-timeline: --{name} block' },
]

const supportsClasses = [
  { className: 'no-animations:...', code: '@supports not (animation-range: cover) { ... }' },
]

const Docs = () => {
  return (
    <div>
      <Heading size={1} id="documentation">
        Documentation
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

      <Heading size={2} id="documentation-animation-timeline">
        Animation Timeline
      </Heading>
      <Paragraph>
        The single most impressive feature of scroll-driven animations is an anonymous animation
        timeline. It allows to easily trigger anything just by scrolling the page. Use the{' '}
        <Code>timeline</Code> utility which defaults to <Code>animation-timeline: scroll(y)</Code>{' '}
        and also provides an option to set custom timeline name with a modifier.
      </Paragraph>
      <DocsTable items={animationTimelineClasses} />
      <Heading size={3}>Anonymous Scroll Timeline Demo</Heading>
      <Paragraph>
        This demo showcases how to create a simple progress bar just by adding one utility class to
        the element. We define the anonymous scroll timeline by adding <Code>timeline</Code> to the
        progress bar.
      </Paragraph>
      <ProgressBarDemo />
      <CodeBlock language="html">{progressBarDemo}</CodeBlock>
      <CodeBlock language="css">{progressBarKeyframes}</CodeBlock>
      <Heading size={3}>Anonymous View Timeline Demo</Heading>
      <Paragraph>
        This demo showcases how to make the element appear after entering the view frame. We define
        the anonymous view timeline by adding <Code>timeline-view</Code> to this element.
      </Paragraph>
      <AppearDemo />
      <CodeBlock language="html">{appearDemo}</CodeBlock>
      <CodeBlock language="css">{appearKeyframes}</CodeBlock>

      <Heading size={2}>Named Timelines</Heading>
      <Heading size={3} id="documentation-scroll-timeline">
        Scroll Timeline
      </Heading>
      <Paragraph>
        Utility class setting the named scroll progress timeline, which is set on a scrollable
        element.
      </Paragraph>
      <DocsTable items={scrollTimelineClasses} />
      <Heading size={3} id="documentation-view-timeline">
        View Timeline
      </Heading>
      <Paragraph>
        Utility class setting the named view progress timeline, which is set on a subject inside
        another scrollable element.
      </Paragraph>
      <DocsTable items={viewTimelineClasses} />
      <Heading size={2} id="documentation-range">
        Animation Range
      </Heading>
      <Paragraph>
        Animation range start controls where along the timeline an animation will start. It is set
        on the animated element.
      </Paragraph>
      <DocsTable items={rangeClasses} />
      <Heading size={3}>Animation Range Demo</Heading>
      <Paragraph>
        Scroll the container to see each how range utility class affects the animation.
      </Paragraph>
      <MultiRangeDemo />
      <CodeBlock language="html">{multiRange}</CodeBlock>
      <CodeBlock language="css">{multiRangeKeyframes}</CodeBlock>
      <Heading size={2} id="documentation-scope">
        Timeline Scope
      </Heading>
      <Paragraph>
        Timeline scope allows to control animations outside the element which defines the timeline.
      </Paragraph>
      <DocsTable items={scopeClasses} />
      <Heading size={3}>Range, Scope and Animation Timeline Name Demo</Heading>
      <Paragraph>
        This demo showcases the usage of the plugin to reveal the navigation bar. The{' '}
        <Code>view-timeline/navbar</Code> utility sets up the animation timeline, which is then
        scoped out of the defining element by <Code>scope/navbar</Code>. The navigation bar is
        controlled by this timeline with the <Code>timeline/navbar</Code> utility. Utility class{' '}
        <Code>range-on-exit</Code> is set to limit the timeline duration.
      </Paragraph>
      <RangeDemo />
      <CodeBlock language="html">{rangeDemo}</CodeBlock>
      <CodeBlock language="css">{rangeKeyframes}</CodeBlock>
      <Heading size={2} id="documentation-fallback">
        Fallback Styling
      </Heading>
      <Paragraph>
        Use the <Code>no-animations</Code> modifier to apply fallback styling in browsers which do
        not support scroll-driven animations yet.
      </Paragraph>
      <DocsTable items={supportsClasses} />
      <Heading size={3}>Fallback Demo</Heading>
      <SupportsDemo />
      <CodeBlock language="html">{supports}</CodeBlock>
    </div>
  )
}

export default Docs
