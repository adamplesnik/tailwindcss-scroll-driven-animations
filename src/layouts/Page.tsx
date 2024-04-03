import { PropsWithChildren } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import PageBackground from '../components/PageBackground'
import Nav from '../partials/Nav'

function Page({ children }: PropsWithChildren<PageProps>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageBackground />
      <Nav />
      <div className="relative z-10 w-full max-w-screen-md p-8 md:p-16 lg:p-20">
        <div className="w-full">{children}</div>
      </div>
      <ScrollRestoration />
    </div>
  )
}

export interface PageProps {
  children: PropsWithChildren
}

export default Page
