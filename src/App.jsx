import './App.css'
import Header from './components/atoms/Header'
import SubNav from './components/atoms/SubNav'
import { Outlet } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  return (
    <>
      <Header />
      <SubNav />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} /> 
    </>
  )
}

export default App
