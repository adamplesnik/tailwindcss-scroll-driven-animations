import Code from '../components/Code'
import Skeleton from '../components/Skeleton'
import DemoWrapper from './DemoWrapper'

const skeletonCollection = ['46%', '100%', '92%', '100%', '93%', '87%', '93%', '87%', '55%']

const TimelineOverrideDemo = () => {
  return (
    <DemoWrapper className="" actionButton>
      <div className="sticky top-0  flex flex-col gap-4 p-8 sm:flex-row">
        <div className="flex items-center">
          <span className="animate-opacity rounded-lg bg-sky-500/40 p-4 dark:bg-fuchsia-300/60">
            <Code>timeline</Code> <span className="text-sm font-medium">before</span>{' '}
            <Code>animate-opacity</Code>
          </span>
        </div>
        <div className="flex items-center">
          <span className="animate-opacity rounded-lg bg-sky-500/40 p-4 timeline dark:bg-fuchsia-300/60">
            <Code>animate-opacity</Code> <span className="text-sm font-medium">before</span>{' '}
            <Code>timeline</Code>
          </span>
        </div>
      </div>
      <div className="p-8">
        {skeletonCollection.map((width, key) => (
          <Skeleton width={width} key={key} />
        ))}
      </div>
      <div className="px-8 pb-8">
        {skeletonCollection.map((width, key) => (
          <Skeleton width={width} key={key} />
        ))}
      </div>
    </DemoWrapper>
  )
}

export default TimelineOverrideDemo
