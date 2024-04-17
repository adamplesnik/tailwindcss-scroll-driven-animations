import { addWithSpace } from '../utils/addWithSpace'

const ChartColumn = ({ className = '' }: ChartColumnProps) => {
  return (
    <div className="relative flex h-full w-4 items-end bg-gray-200/50 dark:bg-gray-800/50">
      <div
        className={
          'animate-rise h-0 w-full rounded-t-full bg-gradient-to-tr from-cyan-300 to-indigo-300/50 timeline/chart range-on-entry/60px-80dvh no-animations:h-full dark:from-zinc-400 dark:to-zinc-500 ' +
          addWithSpace(className)
        }
      ></div>
    </div>
  )
}

export interface ChartColumnProps {
  className?: string
}

export default ChartColumn
