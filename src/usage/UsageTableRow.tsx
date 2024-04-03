const UsageTableRow = ({ className, code }: UsageTableRowProps) => {
  return (
    <div className="flex flex-col gap-1 font-mono text-sm sm:flex-row sm:gap-4">
      <div className="w-64 px-2 opacity-80">.{className}</div>
      <div className="flex-1 pl-8 pr-2 text-sky-700 sm:pl-2 dark:text-sky-300">{code};</div>
    </div>
  )
}

export interface UsageTableRowProps {
  className: string
  code: string
}

export default UsageTableRow
