import { PropsWithChildren } from 'react'

const Title = ({ size = 1, className = '', children }: PropsWithChildren<TitleProps>) => {
  return (
    <div
      className={
        'w-full ' +
        (size === 1
          ? 'text-4xl font-medium'
          : size === 2
            ? 'text-3xl font-medium'
            : 'text-xl font-medium') +
        (className && ` ${className}`)
      }
    >
      {children}
    </div>
  )
}

export interface TitleProps {
  children: PropsWithChildren
  className?: string
  size: 1 | 2 | 3
}

export default Title
