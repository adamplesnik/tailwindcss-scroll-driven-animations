import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import HomeView from './views/HomeView'
import DocsView from './views/DocsView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    errorElement: <HomeView />,
  },
  {
    path: '/usage',
    element: <DocsView />,
  },
  {
    path: '/docs',
    element: <DocsView />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
