import { PropsWithChildren } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import CenterLayout from './CenterLayout'

function Page({ children }: PropsWithChildren<PageProps>) {
  return (
    <>
      <CenterLayout className="p-8">{children}</CenterLayout>
      <ScrollRestoration />
    </>
  )
}

export interface PageProps {
  children: PropsWithChildren
}

export default Page
