const DemoTriggerLine = ({
  className = '',
  explanation = '',
  percentage = undefined,
}: DemoTriggerLineProps) => {
  return (
    <div className={'flex h-8 items-center' + (className ? ` ${className}` : '')}>
      <div className="h-0.5 min-w-4 flex-1 bg-fuchsia-500/50 dark:bg-cyan-500"></div>
      {percentage || explanation ? (
        <div className="flex items-center gap-1 px-4">
          {percentage || percentage === 0 ? (
            <span className="text-sm font-bold">{percentage}%</span>
          ) : (
            ''
          )}
          {explanation ? <span className="truncate text-xs font-medium">{explanation}</span> : ''}
        </div>
      ) : (
        ''
      )}
      <div className="h-0.5 min-w-4 flex-1 bg-fuchsia-500/50 dark:bg-cyan-500"></div>
    </div>
  )
}

export interface DemoTriggerLineProps {
  percentage?: number | undefined
  className?: string
  explanation?: string
  iconClassName?: string
}

export default DemoTriggerLine
