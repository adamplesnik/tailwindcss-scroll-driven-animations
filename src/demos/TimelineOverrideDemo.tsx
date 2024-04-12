import Code from '../components/Code'
import DemoWrapper from './DemoWrapper'

const TimelineOverrideDemo = () => {
  return (
    <DemoWrapper className="max-h-60 sm:max-h-48" actionButton>
      <div className="sticky top-0  flex flex-col gap-4 p-8">
        <div className="flex flex-1 items-center">
          <span className="animate-opacity rounded-lg bg-sky-500/40 p-4 dark:bg-fuchsia-300/60">
            <Code>timeline</Code> <span className="text-sm font-medium">before</span>{' '}
            <Code>animate-opacity</Code>
          </span>
        </div>
        <div className="flex flex-1 items-center">
          <span className="animate-opacity rounded-lg bg-sky-500/40 p-4 timeline dark:bg-fuchsia-300/60">
            <Code>animate-opacity</Code> <span className="text-sm font-medium">before</span>{' '}
            <Code>timeline</Code>
          </span>
        </div>
      </div>
      <div className="h-96"></div>
    </DemoWrapper>
  )
}

export default TimelineOverrideDemo
