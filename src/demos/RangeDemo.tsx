import Skeleton from '../components/Skeleton'
import DemoPlaceholderContent from './DemoPlaceholderContent'
import DemoTriggerLine from './DemoTriggerLine'
import DemoWrapper from './DemoWrapper'

const skeletonCollection = ['96%', '100%', '92%', '100%', '93%', '87%', '55%']

const RangeDemo = () => {
  return (
    <DemoWrapper>
      <div className="text-sm scope/range supports-animations:-mt-8">
        <div className="sticky top-0 z-10 flex animate-translate-down flex-wrap gap-1 border-b border-b-zinc-300 bg-white/20 p-4 backdrop-blur timeline/range range-start-exit-crossing range-end supports-animations:-translate-y-16 dark:border-b-zinc-600 dark:bg-slate-800/60">
          Navbar
        </div>
        <DemoPlaceholderContent>
          <Skeleton />
          <Skeleton width={'100%'}></Skeleton>
          <Skeleton width={'78%'}></Skeleton>
          <DemoTriggerLine explanation="0% when the element starts to leave the frame" />
          <div className="w-full rounded bg-sky-500/40 p-4 timeline-view view-timeline/range dark:bg-fuchsia-300/60">
            Show the navbar
          </div>
          <DemoTriggerLine explanation="100% when the element leaves the frame" />
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
