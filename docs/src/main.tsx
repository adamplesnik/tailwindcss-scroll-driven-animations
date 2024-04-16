import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import DocsView from './views/DocsView'
import TechView from './views/TechView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DocsView />,
    errorElement: <DocsView />,
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
