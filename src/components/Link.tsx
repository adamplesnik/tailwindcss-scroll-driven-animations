import { PropsWithChildren } from 'react'

const Link = ({ children, className, href, target }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className={
        'bg-gradient-to-r from-fuchsia-400 to-violet-800 bg-clip-text text-transparent dark:to-violet-700' +
        (className && ` ${className}`)
      }
    >
      {children}
    </a>
  )
}

export interface LinkProps {
  children: PropsWithChildren
  className?: string
  href: string
  target: string
}

export default Link
