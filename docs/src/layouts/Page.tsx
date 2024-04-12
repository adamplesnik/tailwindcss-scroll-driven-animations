import { PropsWithChildren } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import CenterLayout from './CenterLayout'

function Page({ children }: PropsWithChildren<PageProps>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <CenterLayout className="p-8">{children}</CenterLayout>
      <ScrollRestoration />
    </div>
  )
}

export interface PageProps {
  children: PropsWithChildren
}

export default Page
