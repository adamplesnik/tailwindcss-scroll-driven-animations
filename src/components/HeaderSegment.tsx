import { PropsWithChildren } from 'react'

const HeaderSegment = ({ children }: PropsWithChildren<HeaderButtonWrapperProps>) => {
  return (
    <div
      className={
        'flex items-stretch gap-2 rounded-full bg-white/10 p-1 backdrop-blur dark:bg-zinc-500/20'
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
