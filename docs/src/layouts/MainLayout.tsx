import { PropsWithChildren } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Footer from '../partials/Footer'
import PageBackground from '../partials/PageBackground'

function MainLayout({ children }: PropsWithChildren<MainLayoutProps>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageBackground />
      <div className="relative z-10 w-full max-w-screen-lg p-8 md:p-16 lg:p-20">
        <div className="w-full">{children}</div>
        <Footer />
      </div>
      <ScrollRestoration />
    </div>
  )
}

export interface MainLayoutProps {
  children: PropsWithChildren
}

export default MainLayout
