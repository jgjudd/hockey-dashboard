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
  console.log('data:')
  console.log(data)
  return (
    <>
      { isLoading && <div>Loading...</div> }
      { isError && <div>Error Loading Team Data</div> }

    <div className='flex justify-end'>
      <div className='mx-4 mb-4 '>
          <div className='text-left ml-2'>
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
        <h3>{data?.teamInfo.name}</h3>
        <p>Est. {data?.teamInfo.firstYearOfPlay}</p>

        <p>{data?.teamInfo.conference.name} Conference</p>
        <p>{data?.teamInfo.division.name} Division</p>
  
        <p>Venue: {data?.teamInfo.venue.name} ({data?.teamInfo.venue.city})</p>

        <a href={data?.teamInfo.officialSiteUrl} target="_blank">{data?.teamInfo.officialSiteUrl}</a>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-2 m-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p className='text-center mb-2'>
            {data?.teamStats.wins}-{data?.teamStats.losses}-{data?.teamStats.ot}
          </p>
          <p> Wins: {data?.teamStats.wins} ({data?.teamStatRankings.wins})</p>
          <p> Losses: {data?.teamStats.losses} ({data?.teamStatRankings.losses})</p>
          <p> OT: {data?.teamStats.ot} ({data?.teamStatRankings.ot})</p>
          <p> Pts: {data?.teamStats.pts} ({data?.teamStatRankings.pts})</p>
        </div>

        <div className="p-2 m-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p> winScoreFirst: {data?.teamStats.winScoreFirst} ({data?.teamStatRankings.winScoreFirst})</p>
          <p> winOppScoreFirst: {data?.teamStats.winOppScoreFirst} ({data?.teamStatRankings.winOppScoreFirst})</p>
          <p> winLeadFirstPer: {data?.teamStats.winLeadFirstPer} ({data?.teamStatRankings.winLeadFirstPer})</p>
          <p> winLeadSecondPer: {data?.teamStats.winLeadSecondPer} ({data?.teamStatRankings.winLeadSecondPer})</p>
          <p> winOutshootOpp: {data?.teamStats.winOutshootOpp} ({data?.teamStatRankings.winOutshootOpp})</p>
          <p> winOutshotByOpp: {data?.teamStats.winOutshotByOpp} ({data?.teamStatRankings.winOutshotByOpp})</p>
        </div>

        <div className="p-2 m-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p> goalsPerGame: {data?.teamStats.goalsPerGame} ({data?.teamStatRankings.goalsPerGame})</p>
          <p> shotsPerGame: {data?.teamStats.shotsPerGame} ({data?.teamStatRankings.shotsPerGame})</p>
          <p> shotsAllowed: {data?.teamStats.shotsAllowed} ({data?.teamStatRankings.shotsAllowed})</p>
          <p> shootingPctg: {data?.teamStats.shootingPctg} ({data?.teamStatRankings.shootingPctg})</p>
        </div>

        <div className="p-2 m-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p> evGGARatio: {data?.teamStats.evGGARatio} ({data?.teamStatRankings.evGGARatio})</p>
          <p> faceOffWinPercentage: {data?.teamStats.faceOffWinPercentage} ({data?.teamStatRankings.faceOffWinPercentage})</p>
          <p> faceOffsLost: {data?.teamStats.faceOffsLost} ({data?.teamStatRankings.faceOffsLost})</p>
          <p> faceOffsTaken: {data?.teamStats.faceOffsTaken} ({data?.teamStatRankings.faceOffsTaken})</p>
          <p> faceOffsWon: {data?.teamStats.faceOffsWon} ({data?.teamStatRankings.faceOffsWon})</p>
        </div>

        <div className="p-2 m-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p> gamesPlayed: {data?.teamStats.gamesPlayed} ({data?.teamStatRankings.gamesPlayed})</p>
          <p> goalsAgainstPerGame: {data?.teamStats.goalsAgainstPerGame} ({data?.teamStatRankings.goalsAgainstPerGame})</p>
        </div>

        <div className="p-2 m-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p> powerPlayOpportunities: {data?.teamStats.powerPlayOpportunities} ({data?.teamStatRankings.powerPlayOpportunities})</p>
          <p> powerPlayGoals: {data?.teamStats.powerPlayGoals} ({data?.teamStatRankings.powerPlayGoals})</p>
          <p> powerPlayGoalsAgainst: {data?.teamStats.powerPlayGoalsAgainst} ({data?.teamStatRankings.powerPlayGoalsAgainst})</p>
          <p> powerPlayPercentage: {data?.teamStats.powerPlayPercentage} ({data?.teamStatRankings.powerPlayPercentage})</p>
        </div>
        
        <div className="p-2 m-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p> penaltyKillPercentage: {data?.teamStats.penaltyKillPercentage} ({data?.teamStatRankings.penaltyKillPercentage})</p>
        </div>

        <div className="p-2 m-2 border-2 border-slate-300 bg-slate-100 shadow-sm">
          <p> ptPctg: {data?.teamStats.ptPctg} ({data?.teamStatRankings.ptPctg})</p>
          <p> savePctg: {data?.teamStats.savePctg} ({data?.teamStatRankings.savePctg})</p>
        </div>

      </div>
    </>
  )
}

export default TeamPage
