import { PropsWithChildren } from 'react'

const Code = ({ children }: PropsWithChildren<CodeProps>) => {
  return (
    <code
      className={
        'rounded-lg border border-zinc-400 bg-zinc-100 p-4 dark:border-zinc-600 dark:bg-zinc-700'
      }
    >
      {children}
    </code>
  )
}

export interface CodeProps {
  children: PropsWithChildren
}

export default Code
