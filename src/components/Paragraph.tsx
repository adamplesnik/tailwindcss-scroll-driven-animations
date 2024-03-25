import { PropsWithChildren } from 'react'

const Paragraph = ({
  children,
  className = '',
  size = 'regular',
}: PropsWithChildren<ParagraphProps>) => {
  return (
    <p
      className={
        'w-full ' +
        (size === 'regular' ? 'text-base' : size === 'large' ? 'text-lg' : 'text-sm') +
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
