import { ArrowLeft } from 'lucide-react'
import Code from '../components/Code'

const DemoTriggerLine = ({ className = '', code = '', explanation = '' }: DemoTriggerLineProps) => {
  return (
    <div
      className={'flex items-center gap-4 view-timeline/demo' + (className ? ` ${className}` : '')}
    >
      <div className="-ml-8 w-4 text-fuchsia-500 dark:text-cyan-500">
        <ArrowLeft strokeWidth={1} />
      </div>
      {code ? <Code>{code}</Code> : <span className="text-xs font-bold">{explanation}</span>}
      <div className="h-px flex-1 border-t border-dashed border-t-fuchsia-500 dark:border-t-cyan-600"></div>
      {explanation && code ? <span className="text-xs font-bold">{explanation}</span> : ''}
      <div className="-mr-8 h-px w-4 bg-fuchsia-500 dark:bg-cyan-500"></div>
    </div>
  )
}

export interface DemoTriggerLineProps {
  className?: string
  code?: string
  explanation?: string
}

export default DemoTriggerLine
