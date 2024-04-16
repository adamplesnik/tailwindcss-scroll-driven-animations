import Code from '../components/Code'
import Skeleton from '../components/Skeleton'
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
    <DemoWrapper className="p-4 sm:p-8">
      <Skeleton />
      <div className="my-8">
        {skeletonCollection.map((width, key) => (
          <Skeleton width={width} key={key} />
        ))}
      </div>
      <DemoTriggerLine percentage={0} explanation="The element enters the frame" />
      <div className="flex h-24 w-full animate-appear flex-wrap items-center gap-x-4 gap-y-1 rounded bg-sky-500/40 p-4 timeline-view dark:bg-fuchsia-300/60">
        <Code>animate-appear</Code> <Code>timeline-view</Code>
      </div>
      <DemoTriggerLine percentage={100} explanation="The element leaves the frame" />
      <div className="my-8">
        {skeletonCollection.map((width, key) => (
          <Skeleton width={width} key={key} />
        ))}
      </div>
    </DemoWrapper>
  )
}

export default AppearDemo
