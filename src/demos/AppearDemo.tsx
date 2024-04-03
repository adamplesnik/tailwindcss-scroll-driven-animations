import Skeleton from '../components/Skeleton'
import DemoPlaceholderContent from './DemoPlaceholderContent'
import DemoTriggerLine from './DemoTriggerLine'
import DemoWrapper from './DemoWrapper'

const skeletonCollection = [
  '96%',
  '100%',
  '92%',
  '100%',
  '93%',
  '87%',
  '55%',
  '100%',
  '93%',
  '87%',
  '55%',
]

const AppearDemo = () => {
  return (
    <DemoWrapper>
      <DemoPlaceholderContent>
        {' '}
        <Skeleton />
        <div className="my-8">
          {skeletonCollection.map((width, key) => (
            <Skeleton width={width} key={key} />
          ))}
        </div>
        <DemoTriggerLine className="" explanation="0% when the element enters the frame" />
        <div className="flex h-24 w-full animate-appear items-center justify-center gap-4 rounded bg-sky-500/40 p-4 timeline-view dark:bg-fuchsia-300/60">
          <span>'Luke, he is your father!'</span>
        </div>
        <DemoTriggerLine className="" explanation="100% when the element leaves the frame" />
        <div className="my-8">
          {skeletonCollection.map((width, key) => (
            <Skeleton width={width} key={key} />
          ))}
        </div>
      </DemoPlaceholderContent>
    </DemoWrapper>
  )
}

export default AppearDemo
