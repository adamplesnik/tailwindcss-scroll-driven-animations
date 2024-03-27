import { PropsWithChildren } from 'react'

const Heading = ({
  size = 1,
  className = '',
  children,
  id = '',
}: PropsWithChildren<TitleProps>) => {
  const defaultClasses = 'relative w-full font-semibold' + (className && ` ${className}`)
  const anchor = id ? <a id={id} className={'absolute -top-32'} /> : ''
  if (size === 1) {
    return (
      <h1 className={defaultClasses + ' py-4 text-4xl md:py-8'}>
        {children}
        {anchor}
      </h1>
    )
  } else if (size === 2) {
    return (
      <h2 className={defaultClasses + ' pb-4 pt-6 text-3xl'}>
        {children}
        {anchor}
      </h2>
    )
  } else {
    return (
      <h3 className={defaultClasses + ' pb-2 pt-4 text-lg'}>
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
