import { ArrowLeft } from 'lucide-react'
import Code from '../components/Code'

const DemoTriggerLine = ({
  className = '',
  code = '',
  explanation = '',
  iconClassName = '',
}: DemoTriggerLineProps) => {
  return (
    <div className={'flex h-8 items-center gap-4' + (className ? ` ${className}` : '')}>
      <div className="-ml-8 w-4 text-fuchsia-500 dark:text-cyan-400">
        <ArrowLeft strokeWidth={2} className={iconClassName} />
      </div>
      {code ? <Code>{code}</Code> : <span className="text-xs font-bold">{explanation}</span>}
      <div className="h-1 flex-1 bg-fuchsia-500/50 dark:bg-cyan-500"></div>
      {explanation && code ? <span className="text-xs font-bold">{explanation}</span> : ''}
      <div className="-mr-8 h-1 w-4 bg-fuchsia-500/50 dark:bg-cyan-500"></div>
    </div>
  )
}

export interface DemoTriggerLineProps {
  className?: string
  code?: string
  explanation?: string
  iconClassName?: string
}

export default DemoTriggerLine
