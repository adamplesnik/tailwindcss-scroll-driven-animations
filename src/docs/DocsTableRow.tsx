const DocsTableRow = ({ className, code }: DocsTableRowProps) => {
  return (
    <div className="flex flex-col gap-1 font-mono text-sm sm:flex-row sm:gap-4">
      <div className="px-2 text-zinc-900 sm:w-80 dark:text-zinc-300">{className}</div>
      <div className="flex-1 pl-8 pr-2 text-sky-700 sm:pl-2 dark:text-cyan-600">{code};</div>
    </div>
  )
}

export interface DocsTableRowProps {
  className: string
  code: string
}

export default DocsTableRow
