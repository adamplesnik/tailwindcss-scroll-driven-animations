import { PropsWithChildren } from 'react'

const Paragraph = ({
  children,
  className = '',
  size = 'regular',
}: PropsWithChildren<ParagraphProps>) => {
  return (
    <p
      className={
        'mb-5 w-full ' +
        (size === 'regular'
          ? 'text-base leading-7'
          : size === 'large'
            ? 'text-lg'
            : 'text-sm font-medium') +
        (className && ` ${className}`)
      }
    >
      {children}
    </p>
  )
}

export interface ParagraphProps {
  children: PropsWithChildren
  className?: string
  size?: 'regular' | 'large' | 'small'
}

export default Paragraph
