import { PropsWithChildren } from 'react'

const HeaderSegment = ({ children }: PropsWithChildren<HeaderButtonWrapperProps>) => {
  return (
    <div
      className={
        'relative flex animate-add-shadow items-stretch gap-2 overflow-hidden rounded-full bg-white/10 p-1 backdrop-blur-sm timeline range-end-[200px] dark:bg-zinc-500/20 ' +
        'supports-no-animations:shadow-lg'
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
