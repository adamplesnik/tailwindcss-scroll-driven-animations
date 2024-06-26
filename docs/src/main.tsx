import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import DocsView from './views/DocsView'
import TechView from './views/TechView'
import HowToView from './views/HowToView'

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
  </React.StrictMode>
)
