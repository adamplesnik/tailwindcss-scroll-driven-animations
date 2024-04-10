import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import './index.css'
import RangeDemo from './pages/RangeDemo.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: '/demo',
    children: [
      {
        path: 'range',
        element: <RangeDemo />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)