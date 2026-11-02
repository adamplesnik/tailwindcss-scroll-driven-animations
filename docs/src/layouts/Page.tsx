import { PropsWithChildren } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Nav from '../partials/Nav'
import Footer from '../partials/Footer'
import { Analytics } from '@vercel/analytics/react'

function Page({ children }: PropsWithChildren<PageProps>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Nav />
      <div className="relative z-10 w-full max-w-screen-lg p-8 md:p-12">
        <div className="w-full">{children}</div>
        <Footer />
      </div>
      <ScrollRestoration />
      <Analytics />
    </div>
  )
}

export interface PageProps {
  children: PropsWithChildren
}

export default Page
