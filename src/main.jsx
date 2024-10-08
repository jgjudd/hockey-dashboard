import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App.jsx'
// import Dashboard from './components/views/Dashboard.tsx'
import FantasyStandings from "./components/atoms/FantasyStandings.tsx";
import FantasyRoster from "./components/atoms/FantasyRoster.tsx";
import FantasyFreeAgents from "./components/atoms/FantasyFreeAgents.tsx";


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error Element</div>,
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
