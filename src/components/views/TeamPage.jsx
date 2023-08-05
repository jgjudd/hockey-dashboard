// import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamDataById } from '../../hooks/teamHooks'
import { useQuery } from 'react-query'

const TeamPage = () => {
  const { teamId } = useParams()

  // useEffect(() => {
  //   getTeamById(teamId)
  // }, [teamId])

  // teamInfo, teamStats, teamStatRankings
  
  const { isLoading, isError, data } = useQuery(['teams', teamId, 'stats'], () => getTeamDataById(teamId))
  console.log('data.roster:')
  console.log(data?.forwards)
  console.log(data?.defensemen)
  console.log(data?.goalies)

  return (
    <>
      { isLoading && <div>Loading...</div> }
      { isError && <div>Error Loading Team Data</div> }

      <div className='flex justify-end'>
        <div className='mx-4 mb-4 '>
            <div className='text-left'>
              Select Team:
            </div>
            <select className='border-2 border-slate-300 pr-8 pl-2 py-1'>
              <option value={teamId}>{data?.teamInfo.name}</option>
              <option>2</option>
              <option>2</option>
              <option>2</option>
              <option>2</option>
            </select>
          </div>
      </div>

      <div className="text-center">
        <h1 className='text-2xl'>{data?.teamInfo.name}</h1>
        <p className='mb-4'>Est. {data?.teamInfo.firstYearOfPlay}</p>

        <p className='text-lg'>{data?.teamInfo.conference.name} Conference</p>
        <p className='text-md mb-4'>{data?.teamInfo.division.name} Division</p>
  
        <p>Venue: {data?.teamInfo.venue.name} ({data?.teamInfo.venue.city})</p>

        <a href={data?.teamInfo.officialSiteUrl} target="_blank">{data?.teamInfo.officialSiteUrl}</a>
      </div>

      <p className='text-right text-xl mr-6'>
        Overall: {data?.teamStats.wins}W - {data?.teamStats.losses}L - {data?.teamStats.ot}OTL
      </p>




      <div>
          <h3 className='ml-6'>Forwards</h3>
          <div className='flex flex-wrap justify-around'>
            {
              data?.forwards.map(player => {
                return (
                  <span key={player.person.id} className='m-2 border-2 border-slate-200'>
                    <p>{player.person.fullName}</p>
                    <p>{player.jerseyNumber}</p>
                    <p>{player.person.id}</p>
                    <p>{player.person.link}</p>

                    <p>{player.position.name}</p>
                    <p>{player.position.abbreviation}</p>
                    <p>{player.position.type}</p>

                  </span>
                )
              })
            }
          </div>
      </div>

      <div>
          <h3 className='ml-6'>Defensemen</h3>
          <div className='flex flex-wrap justify-between'>
            {
              data?.defensemen.map(player => {
                return (
                  <span key={player.person.id} className='m-2 border-2 border-slate-200'>
                    <p>{player.person.fullName}</p>
                    <p>{player.person.id}</p>
                    <p>{player.person.link}</p>

                    <p>{player.position.name}</p>
                    <p>{player.position.abbreviation}</p>
                    <p>{player.position.type}</p>

                  </span>
                )
              })
            }
          </div>
      </div>

      <div>
          <h3 className='ml-6'>Goalies</h3>
          <div className='flex flex-wrap justify-between'>   
            {
              data?.goalies.map(player => {
                return (
                  <span key={player.person.id} className='m-2 border-2 border-slate-200'>
                    <p>{player.person.fullName}</p>
                    <p>{player.person.id}</p>
                    <p>{player.person.link}</p>

                    <p>{player.position.name}</p>
                    <p>{player.position.abbreviation}</p>
                    <p>{player.position.type}</p>

                  </span>
                )
              })
            }
          </div>
      </div>

      <div className="p-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p className="text-right text-sm">NHL Rank</p>
          
          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Wins: </span>
              {data?.teamStats.wins}
            </p>
            <p>{data?.teamStatRankings.wins}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Losses: </span>
              {data?.teamStats.losses}
            </p>
            <p>{data?.teamStatRankings.losses}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>OT: </span>
              {data?.teamStats.ot}
            </p>
            <p>{data?.teamStatRankings.ot}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Pts: </span>
              {data?.teamStats.pts}
            </p>
            <p>{data?.teamStatRankings.pts}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-4 text-slate-600"> 
              <span className='text-l font-bold'>Wins When Scoring First: </span>
              {data?.teamStats.winScoreFirst}
            </p>
            <p>{data?.teamStatRankings.winScoreFirst}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-4 text-slate-600"> 
              <span className='text-l font-bold'>Wins When Opponent Scores First: </span>
              {data?.teamStats.winOppScoreFirst}
            </p>
            <p>{data?.teamStatRankings.winOppScoreFirst}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-4 text-slate-600"> 
              <span className='text-l font-bold'>Wins When Leading In First Period: </span>
              {data?.teamStats.winLeadFirstPer}
            </p>
            <p>{data?.teamStatRankings.winLeadFirstPer}</p>
          </div>

          <div className='flex justify-between'>
          <p className="mb-4 text-slate-600"> 
            <span className='text-l font-bold'>Wins When Leading In Second Period: </span>
            {data?.teamStats.winLeadSecondPer}
          </p>
          <p className='ml-8'>{data?.teamStatRankings.winLeadSecondPer}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-4 text-slate-600"> 
              <span className='text-l font-bold'>Wins When Outshooting Opponent: </span>
              {data?.teamStats.winOutshootOpp}
            </p>
            <p>{data?.teamStatRankings.winOutshootOpp}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-4 text-slate-600"> 
              <span className='text-l font-bold'>Wins When Outshot By Opponent: </span>
              {data?.teamStats.winOutshotByOpp}
            </p>
            <p>{data?.teamStatRankings.winOutshotByOpp}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Shots Per Game: </span>
              {data?.teamStats.shotsPerGame}
            </p>
            <p>{data?.teamStatRankings.shotsPerGame}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Shots Allowed Per Game: </span>
              {data?.teamStats.shotsAllowed}
            </p>
            <p className='ml-14'>{data?.teamStatRankings.shotsAllowed}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Shooting Pctg: </span>
              {data?.teamStats.shootingPctg}%
            </p>
            <p>{data?.teamStatRankings.shootingPctRank}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>evGGA Ratio: </span>
              {data?.teamStats.evGGARatio}
            </p>
            <p>{data?.teamStatRankings.evGGARatio}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Faceoff Win Percentage: </span>
              {data?.teamStats.faceOffWinPercentage}%
            </p>
            <p>{data?.teamStatRankings.faceOffWinPercentage}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Faceoffs Lost: </span>
              {data?.teamStats.faceOffsLost}
            </p>
            <p>{data?.teamStatRankings.faceOffsLost}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Faceoffs Taken: </span>
              {data?.teamStats.faceOffsTaken}
            </p>
            <p>{data?.teamStatRankings.faceOffsTaken}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Faceoffs Won: </span>
              {data?.teamStats.faceOffsWon}
            </p>
            <p>{data?.teamStatRankings.faceOffsWon}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Goals Per Game: </span>
              {data?.teamStats.goalsPerGame}
            </p>
            <p>{data?.teamStatRankings.goalsPerGame}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Goals Against Per Game: </span>
              {data?.teamStats.goalsAgainstPerGame}
            </p>
            <p>{data?.teamStatRankings.goalsAgainstPerGame}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600">
              <span className='text-l font-bold'>Power Play Percentage: </span>
              {data?.teamStats.powerPlayPercentage}%
            </p>
            <p>{data?.teamStatRankings.powerPlayPercentage}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600">
                <span className='text-l font-bold'>Power Play Goals: </span>
                {data?.teamStats.powerPlayGoals}
            </p>
            <p>{data?.teamStatRankings.powerPlayGoals}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Power Play Opportunities: </span>
              {data?.teamStats.powerPlayOpportunities}
            </p>
            <p>{data?.teamStatRankings.powerPlayOpportunities}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
            <span className='text-l font-bold'>Power Play Goals Against: </span>
            {data?.teamStats.powerPlayGoalsAgainst}
            </p>
            <p>{data?.teamStatRankings.powerPlayGoalsAgainst}</p>
          </div>  

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600">
              <span className='text-l font-bold'>Penalty Kill Percentage: </span>
              {data?.teamStats.penaltyKillPercentage}%
            </p>
            <p>{data?.teamStatRankings.penaltyKillPercentage}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Point Pctg: </span> 
              {data?.teamStats.ptPctg}
            </p>
            <p>{data?.teamStatRankings.ptPctg}</p>
          </div>

          <div className='flex justify-between'>
            <p className="mb-2 text-slate-600"> 
              <span className='text-l font-bold'>Save Pctg: </span>
              {data?.teamStats.savePctg}
            </p>
            <p>{data?.teamStatRankings.savePctRank}</p>
          </div>
      </div>

    </>
  )
}

export default TeamPage
