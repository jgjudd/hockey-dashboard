import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/views/Dashboard.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import TeamPage from './components/views/TeamPage'

const queryClient = new QueryClient()

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
        path: '/allTeams',
        element: <Dashboard />,
      },
      {
        path: '/teams/:teamId',
        element: <TeamPage />
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
