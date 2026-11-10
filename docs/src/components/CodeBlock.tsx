import { CheckCheck, Copy, LucideIcon } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import Link from './Link.tsx'
import clsx from 'clsx'

const CodeBlock = ({
  children,
  Icon = undefined,
  language = 'javascript',
  linkHref = '',
  linkText = '',
  clipboard = false,
}: PropsWithChildren<CodeProps>) => {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeRef.current?.textContent ?? '')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={
        'relative mb-4 rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:bg-slate-800 dark:text-zinc-300'
      }
    >
      <code
        ref={codeRef}
        className={`language-${language} block overflow-y-auto whitespace-pre rounded-lg bg-transparent p-4 text-sm dark:text-zinc-300`}
      >
        {children}
      </code>
      {clipboard && (
        <a
          className="absolute right-2 top-2 flex rounded-sm p-1 opacity-60 transition-opacity hover:bg-zinc-300 hover:opacity-100 dark:hover:bg-zinc-700"
          href="#copy"
          title="Copy co clipboard"
          onClick={(e) => {
            e.preventDefault()
            copyToClipboard()
          }}
        >
          <CheckCheck
            size={16}
            className={clsx(
              'absolute text-green-800 transition-opacity dark:text-green-500',
              copied ? 'opacity-100' : 'opacity-0'
            )}
          />
          <Copy
            size={16}
            className={clsx(' transition-opacity', !copied ? 'opacity-100' : 'opacity-0')}
          />
        </a>
      )}
      {linkHref && (
        <div
          className={
            'flex items-center gap-1 border-t border-t-zinc-300 bg-zinc-200/10 px-4 py-2 text-xs dark:border-t-slate-700 dark:bg-zinc-800/10 '
          }
        >
          {Icon && <Icon size={14} strokeWidth={2} />}
          <Link href={linkHref} target={'_blank'}>
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
  clipboard?: boolean
}

export default CodeBlock
