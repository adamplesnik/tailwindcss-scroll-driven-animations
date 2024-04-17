import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import DocsPage from './pages/DocsPage'
import HeroPage from './pages/HeroPage'
import HowToPage from './pages/HowToPage'
import TechPage from './pages/TechPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HowToPage />,
    errorElement: <HowToPage />,
  },
  {
    path: '/docs',
    element: <DocsPage />,
  },
  {
    path: '/tech',
    element: <TechPage />,
  },
  {
    path: '/hero',
    element: <HeroPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
)
