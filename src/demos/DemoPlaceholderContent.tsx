import { PropsWithChildren } from 'react'

const DemoPlaceholderContent = ({ children }: PropsWithChildren<DemoWrapperProps>) => {
  return (
    <div className="m-4 rounded-lg border border-dashed border-fuchsia-300 p-8 dark:border-cyan-900">
      {children}
    </div>
  )
}

export interface DemoWrapperProps {
  children: PropsWithChildren
}

export default DemoPlaceholderContent
