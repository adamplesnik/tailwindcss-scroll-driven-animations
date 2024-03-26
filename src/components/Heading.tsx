import { PropsWithChildren } from 'react'

const Heading = ({
  size = 1,
  className = '',
  children,
  id = '',
}: PropsWithChildren<TitleProps>) => {
  return (
    <div
      className={
        'relative w-full ' +
        (size === 1
          ? 'py-4 text-4xl font-medium md:py-8'
          : size === 2
            ? 'pb-4 pt-6 text-3xl font-medium'
            : 'pb-3 pt-4 text-xl font-medium') +
        (className && ` ${className}`)
      }
    >
      {id ? <span id={id} className={'absolute -top-32'} /> : ''}
      {children}
    </div>
  )
}

export interface TitleProps {
  children: PropsWithChildren
  size: 1 | 2 | 3
  className?: string
  id?: string
}

export default Heading
