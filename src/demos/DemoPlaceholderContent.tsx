import { PropsWithChildren } from 'react'

const DemoPlaceholderContent = ({ children }: PropsWithChildren<DemoWrapperProps>) => {
  return (
    <div className="mx-4 mb-4 mt-2 rounded-lg border border-dashed border-fuchsia-400 p-8 dark:border-cyan-800">
      {children}
    </div>
  )
}

export interface DemoWrapperProps {
  children: PropsWithChildren
}

export default DemoPlaceholderContent
