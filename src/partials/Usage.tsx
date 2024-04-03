import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import UsageTable from '../usage/UsageTable'

const animationTimelineClasses = [
  { className: 'timeline', code: 'animation-timeline: scroll(y)' },
  { className: 'timeline-scroll-x', code: 'animation-timeline: scroll(x)' },
  { className: 'timeline-view', code: 'animation-timeline: view()' },
  { className: 'timeline-auto', code: 'animation-timeline: auto' },
  { className: 'timeline-none', code: 'animation-timeline: none' },
  { className: 'timeline/{name}', code: 'animation-timeline: {name}' },
]

const scrollTimelineClasses = [
  { className: 'scroll-timeline/{name}', code: 'scroll-timeline: {name} y' },
  { className: 'scroll-timeline-x/{name}', code: 'scroll-timeline: {name} x' },
  { className: 'scroll-timeline-block/{name}', code: 'scroll-timeline: {name} block' },
]

const viewTimelineClasses = [
  { className: 'view-timeline/{name}', code: 'view-timeline: {name} y' },
  { className: 'view-timeline-x/{name}', code: 'view-timeline: {name} x' },
  { className: 'view-timeline-block/{name}', code: 'view-timeline: {name} block' },
]

const Usage = () => {
  return (
    <div>
      <Heading size={2}>Usage</Heading>
      <Heading size={3}>Animation Timeline</Heading>
      <Paragraph>
        Utility class specifying the timeline that is used to control the progress of a CSS
        animation.
      </Paragraph>
      <UsageTable items={animationTimelineClasses} />
      <Heading size={3}>Scroll Timeline</Heading>
      <Paragraph>
        Utility class setting the named scroll progress timeline, which is set on a scrollable
        element.
      </Paragraph>
      <UsageTable items={scrollTimelineClasses} />
      <Heading size={3}>View Timeline</Heading>
      <Paragraph>
        Utility class setting the named view progress timeline, which is set on a subject inside
        another scrollable element.
      </Paragraph>
      <UsageTable items={viewTimelineClasses} />
    </div>
  )
}

export default Usage
