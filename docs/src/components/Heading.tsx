import { ArrowRight } from 'lucide-react'
import { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { addWithSpace } from '../utils/addWithSpace'

const Heading = ({
  size = 1,
  className = '',
  children,
  id = '',
  href = '',
  hrefType = 'documentation',
}: PropsWithChildren<TitleProps>) => {
  const defaultClasses =
    'relative w-full text-zinc-900 dark:text-zinc-300' + addWithSpace(className)
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
      <h1 className={defaultClasses + ' py-2 text-3xl font-semibold '}>
        {children}
        {anchor}
      </h1>
    )
  } else if (size === 2) {
    return (
      <h2 className={defaultClasses + ' pb-4 pt-16 text-4xl font-semibold has-[+h3]:pb-0'}>
        {children}
        {anchor}
      </h2>
    )
  } else {
    return (
      <h3 className={defaultClasses + ' mt-2 flex items-center gap-4 pb-4 pt-16 text-xl font-bold'}>
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
