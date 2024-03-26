import { PropsWithChildren } from 'react'

const HeaderSegment = ({ children }: PropsWithChildren<HeaderButtonWrapperProps>) => {
  return (
    <div
      className={
        'animate-add-shadow timeline range-end-[200px] flex items-stretch gap-2 overflow-hidden rounded-full bg-white/10 p-1 backdrop-blur-sm dark:bg-zinc-500/20'
      }
    >
      {children}
    </div>
  )
}

export interface HeaderButtonWrapperProps {
  children: PropsWithChildren
}

export default HeaderSegment
