import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

const HeaderNavAnchor = ({ children, to, className, external = false }: HeaderNavAnchorProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'flex items-center justify-center px-2 text-sm font-medium text-zinc-900 transition-opacity duration-200 hover:opacity-100 dark:text-zinc-100',
          isActive ? 'opacity-100' : 'opacity-70',
          className
        )
      }
      target={external ? '_blank' : ''}
    >
      {children}
    </NavLink>
  )
}

export type HeaderNavAnchorProps = {
  children: PropsWithChildren
  to: string
  external?: boolean
} & HTMLAttributes<NavLinkProps>

export default HeaderNavAnchor
