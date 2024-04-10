import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import MultiRangeDemo from '../demos/MultiRangeDemo'
import { multiRange, multiRangeKeyframes } from '../utils/demoExamples'
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

const Docs = () => {
  return (
    <div>
      <Heading size={2} id="documentation">
        Documentation
      </Heading>
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
      <Paragraph size="small" className="pt-6">
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
    </div>
  )
}

export default Docs
