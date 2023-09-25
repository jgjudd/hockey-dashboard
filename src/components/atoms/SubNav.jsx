import { Link } from 'react-router-dom'

const SubNav = () => {
  return (
    <nav className="z-10 sticky top-0 h-12 mb-2 shadow-sm border-b-2 border-red text-white bg-grey flex justify-center items-center">
      <ul className="flex justify-center">
        <Link to={"/league"} className="mx-4">League</Link>
        <p>|</p>
        <Link to={"/allTeams"} className="mx-4">Teams</Link>
        <p>|</p>
        <Link to={"/players"} className="mx-4">Player Stats</Link>
        <p>|</p>
        <Link to={"/fantasy"} className="mx-4">Fantasy</Link>
      </ul>
  </nav>
  )
}

export default SubNav
