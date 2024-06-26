import { LucideIcon } from 'lucide-react'
import Prism from 'prismjs'
import { PropsWithChildren, useEffect } from 'react'
import Link from './Link.tsx'

const CodeBlock = ({
  children,
  Icon = undefined,
  language = 'javascript',
  linkHref = '',
  linkText = '',
}: PropsWithChildren<CodeProps>) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div
      className={
        'mb-4 rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:bg-slate-800 dark:text-zinc-300'
      }
    >
      <code
        className={`language-${language} block overflow-y-auto whitespace-pre rounded-lg bg-transparent p-4 text-sm dark:text-zinc-300`}
      >
        {children}
      </code>
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
  language?: 'javascript' | 'css' | 'html' | 'bash'
  linkHref?: string | undefined
  linkText?: string | undefined
}

export default CodeBlock
