import { Link } from 'react-router-dom'

const SubNav = () => {
  return (
    <nav className="z-10 sticky top-0 h-12 mb-6 shadow-sm border-b-2 border-blue-100 text-white bg-grey flex justify-center items-center">
      <ul className="flex justify-center">
        <Link to={"/league"} className="mx-4">League</Link>
        <Link to={"/allTeams"} className="mx-4">Teams</Link>
        <Link to={"/players"} className="mx-4">Players</Link>
      </ul>
  </nav>
  )
}

export default SubNav
