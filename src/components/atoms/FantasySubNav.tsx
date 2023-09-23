import { Link } from 'react-router-dom'

const FantasySubNav = () => {
  return (
    <nav className="z-10 sticky top-0 h-12 mb-6 shadow-sm border-b-2 border-red text-white bg-grey flex justify-center items-center">
      <ul className="flex justify-center">
        <Link to={"/fantasy/standings"} className="mx-4">League Standings</Link>
        <p>|</p>
        <Link to={"/fantasy/roster"} className="mx-4">My Roster</Link>
        <p>|</p>
        <Link to={"/fantasy/freeagents"} className="mx-4">Free Agents</Link>
      </ul>
  </nav>
  )
}

export default FantasySubNav
