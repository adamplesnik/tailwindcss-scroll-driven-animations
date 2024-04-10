import { PropsWithChildren } from 'react'

const Code = ({ children }: PropsWithChildren<InlineCodeProps>) => (
  <pre className="font-mono whitespace-nowrap bg-fuchsia-200/40 p-1 px-1 py-0.5 text-sm dark:bg-indigo-200/20 dark:text-zinc-200 inline-block">
    {children}
  </pre>
)

export interface InlineCodeProps {
  children: PropsWithChildren
}

export default Code
