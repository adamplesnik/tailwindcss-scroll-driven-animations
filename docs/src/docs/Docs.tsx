import { Minus } from 'lucide-react'
import Code from '../components/Code'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import MultiRangeDemo from '../demos/MultiRangeDemo'
import SupportsDemo from '../demos/SupportsDemo'
import TimelineOverrideDemo from '../demos/TimelineOverrideDemo'
import {
  keyframes101,
  keyframes102,
  keyframes103,
  multiRange,
  multiRangeKeyframes,
  supports,
} from '../utils/demoExamples'
import DocsTable from './DocsTable'

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
    className: 'range/{startValue},{endValue}',
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
      <Heading size={2} id="documentation">
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
      <Heading size={3} id="documentation-101">
        How to Make Your CSS Animation Scroll-driven
      </Heading>
      <Paragraph>
        CSS animations consist of two components, a set of keyframes and a style describing the
        animation. Let's declare a simple <Code>@opacity</Code> keyframe set and apply it to an
        element we want to control by a scroll timeline.
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
      <Heading size={3} href="#timeline" hrefType="demo" id="documentation-animation-timeline">
        Animation Timeline
      </Heading>
      <Paragraph>
        Utility class specifying the timeline that is used to control the progress of a CSS
        animation.
      </Paragraph>
      <DocsTable items={animationTimelineClasses} />
      <Heading size={3} href="#range" hrefType="demo" id="documentation-scroll-timeline">
        Scroll Timeline
      </Heading>
      <Paragraph>
        Utility class setting the named scroll progress timeline, which is set on a scrollable
        element.
      </Paragraph>
      <DocsTable items={scrollTimelineClasses} />
      <Heading size={3} href="#range" hrefType="demo" id="documentation-view-timeline">
        View Timeline
      </Heading>
      <Paragraph>
        Utility class setting the named view progress timeline, which is set on a subject inside
        another scrollable element.
      </Paragraph>
      <DocsTable items={viewTimelineClasses} />
      <Heading size={3} id="documentation-range">
        Animation Range
      </Heading>
      <Paragraph>
        Animation range start controls where along the timeline an animation will start. It is set
        on the animated element.
      </Paragraph>
      <DocsTable items={rangeClasses} />
      <Paragraph className="pt-6">
        Scroll the container to see each how range utility class affects the animation.
      </Paragraph>
      <MultiRangeDemo />
      <CodeBlock language="html">{multiRange}</CodeBlock>
      <CodeBlock language="css">{multiRangeKeyframes}</CodeBlock>
      <Heading size={3} href="#range" hrefType="demo" id="documentation-scope">
        Timeline Scope
      </Heading>
      <Paragraph>
        Timeline scope allows to control animations outside the element which defines the timeline.
      </Paragraph>
      <DocsTable items={scopeClasses} />
      <Heading size={3} id="documentation-fallback">
        Fallback Styling
      </Heading>
      <Paragraph>
        Use the <Code>no-animations</Code> modifier to apply fallback styling in browsers which do
        not support scroll-driven animations yet.
      </Paragraph>
      <DocsTable items={supportsClasses} />
      <SupportsDemo />
      <CodeBlock language="html">{supports}</CodeBlock>
    </div>
  )
}

export default Docs
