import { Link } from 'react-router-dom'

const SubNav = () => {
  return (
    <div className="h-12 border-b-2 border-grey-500 flex justify-center items-center">
      <ul className="flex justify-center">
        <Link to={"/league"} className="mx-4">League</Link>
        <Link to={"/allTeams"} className="mx-4">Teams</Link>
        <Link to={"/players"} className="mx-4">Players</Link>
      </ul>
  </div>
  )
}

export default SubNav
