import { PropsWithChildren } from 'react'
import Link from './Link.tsx'
import { LucideIcon } from 'lucide-react'

const CodeBlock = ({
  children,
  linkHref = '',
  linkText = '',
  Icon = undefined,
}: PropsWithChildren<CodeProps>) => {
  return (
    <div
      className={
        'mb-2 rounded-lg border border-zinc-300 bg-zinc-100 md:mb-4 dark:border-zinc-700 dark:bg-slate-800 dark:text-zinc-300'
      }
    >
      <code className={'block overflow-y-auto whitespace-pre p-4 text-sm'}>{children}</code>
      {linkHref && (
        <div
          className={
            'flex items-center gap-1 border-t border-t-zinc-300 bg-zinc-200/10 px-4 py-2 text-xs dark:border-t-slate-700 dark:bg-zinc-800/10 '
          }
        >
          {Icon && <Icon size={14} strokeWidth={2} />}
          <Link href={linkHref} target={'_blank'} borderWidth={'narrow'}>
            {linkText ? linkText : linkHref}
          </Link>
        </div>
      )}
    </div>
  )
}

export interface CodeProps {
  children: PropsWithChildren
  Icon?: LucideIcon | undefined
  linkHref?: string | undefined
  linkText?: string | undefined
}

export default CodeBlock
