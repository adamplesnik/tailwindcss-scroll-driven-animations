import { ArrowLeft } from 'lucide-react'

const DemoTriggerLine = ({
  className = '',
  explanation = '',
  iconClassName = '',
  percentage = 0,
}: DemoTriggerLineProps) => {
  return (
    <div className={'flex h-8 items-center gap-4' + (className ? ` ${className}` : '')}>
      <div className="-ml-8 w-4 text-fuchsia-500 dark:text-cyan-400">
        <ArrowLeft strokeWidth={2} className={iconClassName} />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold">{percentage}%</span>
        <span className="truncate text-xs font-medium">{explanation}</span>
      </div>
      <div className="-mr-8 h-1 min-w-4 flex-1 bg-fuchsia-500/50 dark:bg-cyan-500"></div>
    </div>
  )
}

export interface DemoTriggerLineProps {
  percentage: number
  className?: string
  explanation?: string
  iconClassName?: string
}

export default DemoTriggerLine
