import { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNavAnchor = ({
  children,
  to: href,
  className = '',
  external = false,
}: PropsWithChildren<HeaderNavAnchorProps>) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        'flex items-center justify-center rounded-full px-2 text-sm font-medium transition-colors duration-200 md:min-w-12 ' +
        'hover:bg-fuchsia-400/40 dark:hover:bg-slate-500/60 ' +
        (isActive ? 'bg-fuchsia-400/30 dark:bg-slate-500/50 ' : '') +
        (className != '' ? ` ${className}` : '')
      }
      target={external ? '_blank' : ''}
    >
      {children}
    </NavLink>
  )
}

export interface HeaderNavAnchorProps {
  children: PropsWithChildren
  to: string
  className?: string | undefined
  external?: boolean
}
export default HeaderNavAnchor
