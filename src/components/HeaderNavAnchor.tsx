import { PropsWithChildren } from 'react'

const HeaderNavAnchor = ({ children, href }: PropsWithChildren<HeaderNavAnchorProps>) => {
  return (
    <a
      href={href}
      className={
        'flex items-center rounded-full bg-gradient-to-r from-fuchsia-300/10 to-violet-500/30 px-2 text-sm font-medium'
      }
    >
      {children}
    </a>
  )
}

export interface HeaderNavAnchorProps {
  children: PropsWithChildren
  href: string
}
export default HeaderNavAnchor
