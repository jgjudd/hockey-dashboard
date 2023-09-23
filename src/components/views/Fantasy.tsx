
import { Outlet } from "react-router-dom"
import FantasySubNav from "../atoms/FantasySubNav"

const Fantasy = () => {
  return (
    <>
      <FantasySubNav />
      <Outlet />
    </>
  )
}

export default Fantasy
