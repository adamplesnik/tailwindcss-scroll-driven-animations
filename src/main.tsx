import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './views/Home'
import Usage from './views/Usage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: '/usage',
    element: <Usage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
