import Prism from 'prismjs'
import { PropsWithChildren, useEffect } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const Code = ({
  children,
  language = 'css',
  className = '',
}: PropsWithChildren<InlineCodeProps>) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <code
      className={
        `language-${language} whitespace-nowrap rounded bg-fuchsia-200/40 p-1 px-1 py-0.5 font-mono text-sm text-zinc-900 dark:bg-indigo-200/20 dark:text-zinc-300` +
        addWithSpace(className)
      }
    >
      {children}
    </code>
  )
}

export interface InlineCodeProps {
  children: PropsWithChildren
  language?: 'javascript' | 'css' | 'html'
  className?: string
}

export default Code
