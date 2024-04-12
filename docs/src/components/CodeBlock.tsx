import Prism from 'prismjs'
import { PropsWithChildren, useEffect } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const CodeBlock = ({
  children,
  language = 'javascript',
  className = '',
}: PropsWithChildren<CodeProps>) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div
      className={
        'mb-4 rounded-lg border border-zinc-200 bg-zinc-200/70 text-zinc-900 dark:border-zinc-700 dark:bg-slate-800 dark:text-zinc-300' +
        addWithSpace(className)
      }
    >
      <code
        className={`language-${language} block overflow-y-auto whitespace-pre rounded-lg bg-transparent p-4 text-sm dark:text-zinc-300`}
      >
        {children}
      </code>
    </div>
  )
}

export interface CodeProps {
  children: PropsWithChildren
  language?: 'javascript' | 'css' | 'html'
  className?: string
}

export default CodeBlock
