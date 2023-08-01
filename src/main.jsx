import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/views/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error Element</div>,
    children: [
      {
        path: '/league',
        element: <div>League Page</div>
      },
      {
        path: '/teams',
        element: <Dashboard />
      },
      {
        path: '/players',
        element: <div>Players Page</div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
