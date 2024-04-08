import { ArrowRight } from 'lucide-react'
import { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

const Heading = ({
  size = 1,
  className = '',
  children,
  id = '',
  href = '',
  hrefType = 'documentation',
}: PropsWithChildren<TitleProps>) => {
  const defaultClasses = 'relative w-full' + (className && ` ${className}`)
  const anchor = id ? <a id={id} className={'absolute -top-32'} /> : ''
  const link = href ? (
    <NavLink to={href} className="group flex gap-1 text-xs text-fuchsia-500 dark:text-cyan-500">
      <span className="border-b border-b-transparent transition-colors group-hover:border-b-current">
        {hrefType === 'documentation' ? 'Documentation' : 'Demo'}
      </span>
      <ArrowRight className={'size-4' + (hrefType === 'demo' ? ' rotate-90' : '')} />
    </NavLink>
  ) : (
    ''
  )
  if (size === 1) {
    return (
      <h1 className={defaultClasses + ' py-4 text-3xl font-semibold md:py-8'}>
        {children}
        {anchor}
      </h1>
    )
  } else if (size === 2) {
    return (
      <h2 className={defaultClasses + ' pb-4 pt-12 text-4xl font-semibold'}>
        {children}
        {anchor}
      </h2>
    )
  } else {
    return (
      <h3 className={defaultClasses + ' flex items-center gap-4 pb-4 pt-8 text-xl font-bold'}>
        {children}
        {anchor}
        {link}
      </h3>
    )
  }
}

export interface TitleProps {
  children: PropsWithChildren
  size: 1 | 2 | 3
  className?: string
  href?: string
  hrefType?: 'documentation' | 'demo'
  id?: string
}

export default Heading
