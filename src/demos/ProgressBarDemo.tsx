import Code from '../components/Code'
import Skeleton from '../components/Skeleton'
import DemoPlaceholderContent from './DemoPlaceholderContent'
import DemoTriggerLine from './DemoTriggerLine'
import DemoWrapper from './DemoWrapper'

const skeletonCollection = ['96%', '100%', '92%', '100%', '93%', '87%', '55%']

const ProgressBarDemo = () => {
  return (
    <DemoWrapper>
      <div className="sticky top-0 z-10 flex w-full animate-scale-to-right gap-2 overflow-hidden rounded-md bg-sky-500/80 timeline dark:bg-fuchsia-500/80">
        <Code>.animate-scale-to-right</Code> <Code>.timeline</Code>
      </div>
      <div className="mt-4">
        <DemoPlaceholderContent>
          <DemoTriggerLine
            className="-mt-8 mb-8"
            percentage={0}
            explanation="scroll(y)"
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
            percentage={100}
            explanation="scroll(y)"
            iconClassName="-rotate-45"
          />
        </DemoPlaceholderContent>
      </div>
    </DemoWrapper>
  )
}

export default ProgressBarDemo
