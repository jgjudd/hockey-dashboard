
import Logo from '../../components/atoms/Logo'
import './TeamCard.css'
import { Link } from 'react-router-dom'

const TeamCard = ({ teamInfo }) => {
  // console.log(teamInfo.id)
  return (
    <Link to={`/teams/${teamInfo.id}`} class="p-1 bg-grey-500 border-2 shadow shadow-slate-50 active:bg-slate-50 hover:border-grey-500">
      <button
        type='button'
        className="w-full flex justify-between items-center"
      >
        <div className="text-left">  
          <p className="mb-2 ml-1 text-lg">{ teamInfo?.name } ({ teamInfo?.abbreviation })</p>
          <p className="ml-2 text-sm">Founded: { teamInfo?.firstYearOfPlay }</p>
          <p className="ml-2 text-sm">Venue: { teamInfo?.venue.name }</p>
          <p className="ml-2 text-sm text-blue-500">
            <a href={teamInfo?.officialSiteUrl} target="_blank">Official Site</a>
          </p>
        </div>
        <div className="mr-1">
          <Logo teamAbbreviation={teamInfo?.abbreviation} />
        </div>
      </button>
    </Link>
  )
}

export default TeamCard
