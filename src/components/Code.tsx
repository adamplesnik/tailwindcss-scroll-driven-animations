import { PropsWithChildren } from 'react'
import Link from './Link.tsx'
import { LucideIcon } from 'lucide-react'

const Code = ({
  children,
  linkHref = '',
  linkText = '',
  Icon = undefined,
}: PropsWithChildren<CodeProps>) => {
  return (
    <div
      className={
        'flex flex-col rounded-lg border border-zinc-400 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-700'
      }
    >
      <code className={'block whitespace-pre-wrap p-4 text-sm text-zinc-800'}>{children}</code>
      <div className={'flex items-center justify-end gap-1 px-4 py-2 text-xs'}>
        {Icon && <Icon size={14} strokeWidth={2} />}
        {linkHref && (
          <Link href={linkHref} target={'_blank'} borderWidth={'narrow'}>
            {linkText ? linkText : linkHref}
          </Link>
        )}
      </div>
    </div>
  )
}

export interface CodeProps {
  children: PropsWithChildren
  Icon?: LucideIcon | undefined
  linkHref?: string | undefined
  linkText?: string | undefined
}

export default Code
