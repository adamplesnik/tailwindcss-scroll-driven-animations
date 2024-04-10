import Code from '../components/Code'
import Skeleton from '../components/Skeleton'
import DemoPlaceholderContent from './DemoPlaceholderContent'
import DemoTriggerLine from './DemoTriggerLine'
import DemoWrapper from './DemoWrapper'

const skeletonCollection = ['96%', '100%', '92%', '100%', '93%', '87%', '55%']

const RangeDemo = () => {
  return (
    <DemoWrapper>
      <div className="text-sm scope/navbar supports-animations:-mt-14 supports-animations:sm:-mt-8">
        <div className="sticky top-0 z-10 flex animate-translate-down flex-wrap gap-1 border-b border-b-zinc-300 bg-sky-500/40 p-4 backdrop-blur timeline/navbar range-on-exit supports-animations:-translate-y-16 dark:border-b-zinc-600 dark:bg-fuchsia-300/60 ">
          <Code>.animate...</Code>
          <Code>.timeline/navbar</Code>
          <Code>.range-on-exit</Code>
        </div>
        <div className="mt-4 px-4 sm:px-8">
          <Code>.scope/navbar</Code>
        </div>
        <DemoPlaceholderContent>
          <Skeleton />
          <Skeleton width={'100%'}></Skeleton>
          <Skeleton width={'78%'}></Skeleton>
          <DemoTriggerLine percentage={0} explanation="The element starts leaving the frame" />
          <div className="w-full rounded p-4 view-timeline/navbar">
            <Code>.view-timeline/navbar</Code>
          </div>
          <DemoTriggerLine percentage={100} explanation="The element leaves the frame" />
          <div className="mb-8">
            {skeletonCollection.map((width, key) => (
              <Skeleton width={width} key={key} />
            ))}
          </div>
          {skeletonCollection.map((width, key) => (
            <Skeleton width={width} key={key} />
          ))}
        </DemoPlaceholderContent>
      </div>
    </DemoWrapper>
  )
}

export default RangeDemo
