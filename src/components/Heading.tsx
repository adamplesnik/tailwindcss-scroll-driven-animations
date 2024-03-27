import { PropsWithChildren } from 'react'

const Heading = ({
  size = 1,
  className = '',
  children,
  id = '',
}: PropsWithChildren<TitleProps>) => {
  const defaultClasses = 'relative w-full' + (className && ` ${className}`)
  const anchor = id ? <span id={id} className={'absolute -top-32'} /> : ''
  if (size === 1) {
    return (
      <h1 className={defaultClasses + ' py-4 text-4xl font-medium md:py-8'}>
        {children}
        {anchor}
      </h1>
    )
  } else if (size === 2) {
    return (
      <h2 className={defaultClasses + ' pb-4 pt-6 text-3xl font-medium'}>
        {children}
        {anchor}
      </h2>
    )
  } else {
    return (
      <h3 className={defaultClasses + ' pb-4 pt-6 text-xl font-medium '}>
        {children}
        {anchor}
      </h3>
    )
  }
}

export interface TitleProps {
  children: PropsWithChildren
  size: 1 | 2 | 3
  className?: string
  id?: string
}

export default Heading
