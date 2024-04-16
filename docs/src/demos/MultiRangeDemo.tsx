import Code from '../components/Code'
import DemoAnimationExampleRow from '../components/DemoAnimationExampleRow'
import Skeleton from '../components/Skeleton'
import DemoWrapper from './DemoWrapper'
import DemoTriggerLine from './DemoTriggerLine'

const skeletonCollection = [
  '46%',
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

const MultiRangeDemo = () => {
  return (
    <DemoWrapper className="flex flex-col gap-4 scope/demo sm:flex-row sm:gap-12">
      <div className="sticky top-0 flex flex-1 flex-col gap-2 bg-zinc-100/20 p-4 backdrop-blur sm:gap-6 sm:bg-transparent dark:bg-zinc-800/20 dark:sm:bg-transparent">
        <DemoAnimationExampleRow animations="range-on-entry" timeline="timeline/demo" />
        <DemoAnimationExampleRow animations="range" timeline="timeline/demo" />
        <DemoAnimationExampleRow animations="range-contain" timeline="timeline/demo" />
        <DemoAnimationExampleRow animations="range-on-exit" timeline="timeline/demo" />
      </div>
      <div className="w-full flex-[2] px-4 sm:pl-0">
        <div className="py-8">
          {skeletonCollection.map((width, key) => (
            <Skeleton width={width} key={key} />
          ))}
        </div>
        <DemoTriggerLine />
        <div className="px-2 py-4 view-timeline/demo sm:px-4">
          <Code>view-timeline/demo</Code>
        </div>
        <DemoTriggerLine />
        <div className="py-8">
          {skeletonCollection.map((width, key) => (
            <Skeleton width={width} key={key} />
          ))}
        </div>
      </div>
    </DemoWrapper>
  )
}

export default MultiRangeDemo
