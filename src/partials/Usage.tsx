import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import UsageTable from '../usage/UsageTable'

const animationTimelineClasses = [
  { className: 'timeline', code: 'animation-timeline: scroll(y)' },
  { className: 'timeline-auto', code: 'animation-timeline: auto' },
  { className: 'timeline-scroll-x', code: 'animation-timeline: scroll(x)' },
  { className: 'timeline-view', code: 'animation-timeline: view()' },
  { className: 'timeline-none', code: 'animation-timeline: none' },
  { className: 'timeline/{name}', code: 'animation-timeline: {name}' },
]

const Usage = () => {
  return (
    <div>
      <Heading size={2}>Usage</Heading>
      <Heading size={3}>Animation Timeline</Heading>
      <Paragraph>Utility class assigning the controller timeline to the component.</Paragraph>
      <UsageTable items={animationTimelineClasses} />
    </div>
  )
}

export default Usage
