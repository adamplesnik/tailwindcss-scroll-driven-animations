import { PropsWithChildren } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import './index.css'
import HowToView from './views/HowToView'

// Applies the dark mode before the first paint, so prerendered pages don't flash light
const darkModeScript = `try {
  if (localStorage.getItem('mode') === 'dark' || matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
} catch {}`

export const links = () => [
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
]

export function Layout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-zinc-50 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
      suppressHydrationWarning
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

// Unknown routes fall back to the home page, as before
export function ErrorBoundary() {
  return <HowToView />
}
