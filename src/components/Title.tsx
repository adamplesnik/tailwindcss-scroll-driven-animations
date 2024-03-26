import { PropsWithChildren } from 'react'

const Title = ({ size = 1, className = '', children, id = '' }: PropsWithChildren<TitleProps>) => {
  return (
    <div
      className={
        'relative w-full ' +
        (size === 1
          ? 'text-4xl font-medium'
          : size === 2
            ? 'text-3xl font-medium'
            : 'text-xl font-medium') +
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

export default Title
