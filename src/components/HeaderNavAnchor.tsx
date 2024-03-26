import { PropsWithChildren } from 'react'

const HeaderNavAnchor = ({
  children,
  href,
  className = '',
}: PropsWithChildren<HeaderNavAnchorProps>) => {
  return (
    <a
      href={href}
      className={
        'flex min-w-12 items-center justify-center rounded-full px-2 text-sm font-medium transition-colors duration-200 ' +
        'hover:bg-zinc-300/40 dark:hover:bg-zinc-500/60' +
        (className != '' ? ` ${className}` : '')
      }
    >
      {children}
    </a>
  )
}

export interface HeaderNavAnchorProps {
  children: PropsWithChildren
  href: string
  className?: string | undefined
}
export default HeaderNavAnchor
