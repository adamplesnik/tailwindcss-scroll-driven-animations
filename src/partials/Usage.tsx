import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import UsageTable from '../usage/UsageTable'

const animationTimelineClasses = [
  { className: 'timeline', code: 'animation-timeline: scroll(y)' },
  { className: 'timeline-scroll-x', code: 'animation-timeline: scroll(x)' },
  { className: 'timeline-view', code: 'animation-timeline: view()' },
  { className: 'timeline-auto', code: 'animation-timeline: auto' },
  { className: 'timeline-none', code: 'animation-timeline: none' },
  { className: 'timeline/{name}', code: 'animation-timeline: --{name}' },
]

const scopeClasses = [{ className: 'scope/{name}', code: 'timeline-scope: --{name}' }]

const rangeStartClasses = [
  { className: 'range-start', code: 'animation-range-start: entry' },
  { className: 'range-start-exit', code: 'animation-range-start: exit' },
  { className: 'range-start-normal', code: 'animation-range-start: normal' },
  { className: 'range-start-contain', code: 'animation-range-start: contain' },
  { className: 'range-start-cover', code: 'animation-range-start: cover' },
  { className: 'range-start-entry-crossing', code: 'animation-range-start: entry-crossing' },
  { className: 'range-start-exit-crossing', code: 'animation-range-start: exit-crossing' },
]

const rangeEndClasses = [
  { className: 'range-end', code: 'animation-range-end: exit' },
  { className: 'range-end-entry', code: 'animation-range-end: entry' },
  { className: 'range-end-normal', code: 'animation-range-end: normal' },
  { className: 'range-end-contain', code: 'animation-range-end: contain' },
  { className: 'range-end-cover', code: 'animation-range-end: cover' },
  { className: 'range-end-entry-crossing', code: 'animation-range-end: entry-crossing' },
  { className: 'range-end-exit-crossing', code: 'animation-range-end: exit-crossing' },
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

const Usage = () => {
  return (
    <div>
      <Heading size={2} id="usage">
        Usage
      </Heading>
      <Heading size={3} href="#timeline">
        Animation Timeline
      </Heading>
      <Paragraph>
        Utility class specifying the timeline that is used to control the progress of a CSS
        animation.
      </Paragraph>
      <UsageTable items={animationTimelineClasses} />
      <Heading size={3} href="#range">
        Scroll Timeline
      </Heading>
      <Paragraph>
        Utility class setting the named scroll progress timeline, which is set on a scrollable
        element.
      </Paragraph>
      <UsageTable items={scrollTimelineClasses} />
      <Heading size={3} href="#range">
        View Timeline
      </Heading>
      <Paragraph>
        Utility class setting the named view progress timeline, which is set on a subject inside
        another scrollable element.
      </Paragraph>
      <UsageTable items={viewTimelineClasses} />
      <Heading size={3} href="#range">
        Timeline Scope
      </Heading>
      <Paragraph>
        Timeline scope allows to control animations outside the element which defines the timeline.
      </Paragraph>
      <UsageTable items={scopeClasses} />
      <Heading size={3} href="#range">
        Animation Range Start
      </Heading>
      <Paragraph>
        Animation range start controls where along the timeline an animation will start. It is set
        on the animated element.
      </Paragraph>
      <UsageTable items={rangeStartClasses} />
      <Heading size={3} href="#range">
        Animation Range End
      </Heading>
      <Paragraph>
        Animation range end controls where along the timeline an animation will end. It is set on
        the animated element.
      </Paragraph>
      <UsageTable items={rangeEndClasses} />
    </div>
  )
}

export default Usage
