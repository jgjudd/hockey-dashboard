import { Link } from 'react-router-dom'

const SubNav = () => {
  return (
    <nav className="z-10 sticky top-0 h-12 mb-2 shadow-sm border-b-2 border-red text-white bg-grey flex justify-center items-center">
      <ul className="flex justify-center">
      <Link to={"/standings"} className="mx-4">League Standings</Link>
        <p>|</p>
        <Link to={"/roster"} className="mx-4">My Roster</Link>
        <p>|</p>
        <Link to={"/freeagents"} className="mx-4">Free Agents</Link>
      </ul>
  </nav>
  )
}

export default SubNav
