import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const DemoPlaceholderContent = ({
  children,
  className = '',
}: PropsWithChildren<DemoWrapperProps>) => {
  return (
    <div
      className={clsx(
        'm-4 rounded-lg border border-dashed border-fuchsia-400 p-4 dark:border-cyan-700',
        className
      )}
    >
      {children}
    </div>
  )
}

export interface DemoWrapperProps {
  children: PropsWithChildren
  className?: string
}

export default DemoPlaceholderContent
