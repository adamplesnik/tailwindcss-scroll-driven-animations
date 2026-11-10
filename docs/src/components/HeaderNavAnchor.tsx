import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { NavLink, NavLinkProps } from 'react-router'

const HeaderNavAnchor = ({ children, to, className, external = false }: HeaderNavAnchorProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'flex items-center  justify-center border-b-2 px-0.5 text-sm font-medium text-zinc-900 transition-[opacity,border-color] duration-200 hover:opacity-100 dark:text-zinc-100',
          isActive ? ' border-current' : 'border-transparent opacity-70 hover:border-current',
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
