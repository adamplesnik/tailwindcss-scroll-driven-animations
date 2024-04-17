import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import DocsView from './views/DocsView'
import HowToView from './views/HowToView'
import TechView from './views/TechView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HowToView />,
    errorElement: <HowToView />,
  },
  {
    path: '/docs',
    element: <DocsView />,
  },
  {
    path: '/tech',
    element: <TechView />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
)
