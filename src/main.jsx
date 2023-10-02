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
import Fantasy from './components/views/Fantasy.tsx'
import FantasyStandings from './components/atoms/FantasyStandings.tsx'
import SignIn from './components/atoms/SignIn.jsx'
import FantasyRoster from './components/atoms/FantasyRoster.tsx'
import FantasyFreeAgents from './components/atoms/FantasyFreeAgents.tsx'

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
        path: '/player/:playerId',
        element: <PlayerPage />
      },
      {
        path: '/signin',
        element: <SignIn />,
        errorElement: <div>Sign In Errror</div>
      },
      {
        path: '/line-combinations',
        element: <div>Line Combinations</div>,
        errorElement: <div>Line Combo Errror</div>
      },
      {
        path: '/starting-goalies',
        element: <div>Starting Goalies</div>,
        errorElement: <div>Goalie Errror</div>
      },
      {
        path: '/fantasy',
        element: <Fantasy />,
        errorElement: <div>Sign In Errror</div>,
        children: [
          {
            path: 'standings',
            element: <FantasyStandings />
          },
          {
            path: 'roster',
            element: <FantasyRoster />
          },
          {
            path: 'freeagents',
            element: <FantasyFreeAgents />
          },
        ]
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
