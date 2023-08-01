
import Logo from '../../components/atoms/Logo'
import './TeamCard.css'

const TeamCard = ({ teamInfo }) => {
  console.log(teamInfo.name)
  return (

      <button 
        class="p-1 bg-grey-500 flex justify-between items-center border-2 shadow shadow-slate-50 active:bg-slate-50 hover:border-grey-500"
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

  )
}

export default TeamCard
