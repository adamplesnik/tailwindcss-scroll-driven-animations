import { PropsWithChildren } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import PageBackground from '../components/PageBackground'
import Footer from '../partials/Footer'
import Nav from '../partials/Nav'
import CenterLayout from './CenterLayout'

function Page({ children }: PropsWithChildren<PageProps>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageBackground />
      <Nav />
      <CenterLayout className="pt-12">
        <div className="w-full">{children}</div>
        <Footer />
      </CenterLayout>

      <ScrollRestoration />
    </div>
  )
}

export interface PageProps {
  children: PropsWithChildren
}

export default Page
