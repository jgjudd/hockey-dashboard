import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App.jsx'
import Dashboard from './components/views/Dashboard.jsx'
import TeamPage from './components/views/TeamPage'
import LeaguePage from './components/views/LeaguePage.jsx'
import PlayerPage from './components/views/PlayerPage.jsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error Element</div>,
    children: [
      {
        path: '/league',
        element: <LeaguePage />
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
        element: <div className='ml-4 text-white'>Players Page</div>
      },
      {
        path: '/player/:playerId',
        element: <PlayerPage />
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
