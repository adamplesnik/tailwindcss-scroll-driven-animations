import { PropsWithChildren } from 'react'
import { LucideIcon } from 'lucide-react'

const Link = ({
  borderWidth = undefined,
  children,
  className,
  href,
  Icon = undefined,
  iconSize = 16,
  iconStrokeWidth = 1.65,
  target,
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className={
        'relative inline-flex items-center gap-1 bg-gradient-to-r from-fuchsia-400 to-violet-800 bg-[length:200%_100%] bg-clip-text text-transparent ' +
        'group transition-[background-size] duration-700' +
        'hover:bg-[length:100%_2000%]' +
        'dark:to-violet-700' +
        (className && ` ${className}`)
      }
    >
      <span>{children}</span>
      {Icon ? (
        <Icon
          size={iconSize}
          absoluteStrokeWidth={true}
          strokeWidth={iconStrokeWidth}
          className={
            'group-hover:animate-bounce-bottom ease-cubic-icon stroke-violet-600 group-hover:max-w-full'
          }
        />
      ) : (
        ''
      )}
      <span
        className={
          (borderWidth === 'narrow' ? 'h-px' : 'h-[2px]') +
          ' ease-cubic-line absolute -bottom-px left-0  w-full max-w-0 bg-gradient-to-r from-fuchsia-400 to-violet-800 transition-[max-width] duration-500 group-hover:max-w-full'
        }
      ></span>
    </a>
  )
}

export interface LinkProps {
  children: PropsWithChildren
  href: string
  target: string
  borderWidth?: undefined | 'narrow'
  className?: string
  Icon?: LucideIcon | undefined
  iconSize?: number | 16
  iconStrokeWidth?: number | 2
}

export default Link
