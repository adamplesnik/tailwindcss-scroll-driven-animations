import { PropsWithChildren } from 'react'

const Code = ({ children }: PropsWithChildren<InlineCodeProps>) => (
  <code
    className={
      'whitespace-nowrap bg-fuchsia-200/40 p-1 px-1 py-0.5 font-mono text-sm text-zinc-900 dark:bg-indigo-200/20 dark:text-zinc-300'
    }
  >
    {children}
  </code>
)

export interface InlineCodeProps {
  children: PropsWithChildren
}

export default Code
