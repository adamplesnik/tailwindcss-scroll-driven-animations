import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import HomeView from './views/HomeView'
import UsageView from './views/UsageView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    errorElement: <HomeView />,
  },
  {
    path: '/usage',
    element: <UsageView />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
