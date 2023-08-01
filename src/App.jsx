import './App.css'
import Header from './components/atoms/Header'
import SubNav from './components/atoms/SubNav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <SubNav />
      <Outlet />
    </>
  )
}

export default App
