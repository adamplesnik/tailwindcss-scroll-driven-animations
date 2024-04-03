import Skeleton from '../components/Skeleton'
import DemoPlaceholderContent from './DemoPlaceholderContent'
import DemoTriggerLine from './DemoTriggerLine'
import DemoWrapper from './DemoWrapper'

const skeletonCollection = ['96%', '100%', '92%', '100%', '93%', '87%', '55%']

const ProgressBarDemo = () => {
  return (
    <DemoWrapper>
      <div className="animate-scale-to-right sticky top-0 z-10 h-3 w-full rounded-md bg-sky-600/70 timeline dark:bg-fuchsia-300/70"></div>
      <div className="mt-4">
        <DemoPlaceholderContent>
          <DemoTriggerLine
            className="-mt-8 mb-8"
            explanation="scroll(y) = 0%"
            iconClassName="rotate-45"
          />
          <Skeleton />
          <div className="my-8">
            {skeletonCollection.map((width, key) => (
              <Skeleton width={width} key={key} />
            ))}
          </div>
          {skeletonCollection.map((width, key) => (
            <Skeleton width={width} key={key} />
          ))}
          <DemoTriggerLine
            className="-mb-8 mt-8"
            explanation="scroll(y) = 100%"
            iconClassName="-rotate-45"
          />
        </DemoPlaceholderContent>
      </div>
    </DemoWrapper>
  )
}

export default ProgressBarDemo
