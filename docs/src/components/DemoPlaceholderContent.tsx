import { PropsWithChildren } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const DemoPlaceholderContent = ({
  children,
  className = '',
}: PropsWithChildren<DemoWrapperProps>) => {
  return (
    <div
      className={
        'm-4 rounded-lg border border-dashed border-fuchsia-300 p-8 dark:border-cyan-900' +
        addWithSpace(className)
      }
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
