import { ArrowLeft } from 'lucide-react'

const DemoTriggerLine = ({
  className = '',
  explanation = '',
  iconClassName = '',
}: DemoTriggerLineProps) => {
  return (
    <div className={'flex h-8 items-center gap-4' + (className ? ` ${className}` : '')}>
      <div className="-ml-8 w-4 text-fuchsia-500 dark:text-cyan-400">
        <ArrowLeft strokeWidth={2} className={iconClassName} />
      </div>
      <span className="truncate text-xs font-bold">{explanation}</span>

      <div className="-mr-8 h-1 min-w-4 flex-1 bg-fuchsia-500/50 dark:bg-cyan-500"></div>
    </div>
  )
}

export interface DemoTriggerLineProps {
  className?: string
  explanation?: string
  iconClassName?: string
}

export default DemoTriggerLine
