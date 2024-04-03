import { PropsWithChildren } from 'react'

const DemoWrapper = ({ children }: PropsWithChildren<DemoWrapperProps>) => {
  return (
    <div className="relative mb-8 h-96 overflow-y-auto overflow-x-hidden rounded-lg border border-zinc-300 bg-zinc-100/70 dark:border-zinc-700 dark:bg-black/10">
      {children}
    </div>
  )
}

export interface DemoWrapperProps {
  children: PropsWithChildren
}

export default DemoWrapper
