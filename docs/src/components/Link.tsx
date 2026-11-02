import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const Link = ({ children, className, href, target }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className={clsx('underline opacity-70 hover:opacity-100', className ? ` ${className}` : '')}
    >
      {children}
    </a>
  )
}

export interface LinkProps {
  children: PropsWithChildren
  href: string
  target: string
  className?: string
}

export default Link
