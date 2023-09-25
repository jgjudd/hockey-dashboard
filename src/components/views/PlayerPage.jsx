import { useParams } from "react-router-dom"
import { getPlayerById } from "../../hooks/playerHooks"
import { useQuery } from "react-query"
import PlayerCareerStats from "../atoms/PlayerCareerStats"

const PlayerPage = () => {
  const { playerId } = useParams()

  const { isLoading, isError, data } = useQuery(['player', playerId], () => getPlayerById(playerId))
  console.log('data', data)

  return (
    <div className="flex justify-around">
      { isError && <div>Error Loading Player Data...</div> }
      { isLoading && <div>Loading...</div> }
      {
        data && (
          <>
            <div className="ml-8 text-white">
              <h1 className="text-2xl">Full Name: {data?.playerInfo.fullName}</h1>
              <br/>
              <p>Player Id: {playerId}</p>
              <p>Player Id (from response): {data?.id}</p>
              <p>Link: {data?.playerInfo.link}</p>
              <br/>
              <p>nationality: {data?.playerInfo.nationality}</p>
              <p>First Name: {data?.playerInfo.firstName}</p>
              <p>Last Name: {data?.playerInfo.lastName}</p>
              <p>Full Name: {data?.playerInfo.fullName}</p>
              <br/>
              <p>currentAge: {data?.playerInfo.currentAge}</p>
              <p>height: {data?.playerInfo.height}</p>
              <p>weight: {data?.playerInfo.weight}</p>
              <p>shootsCatches: {data?.playerInfo.shootsCatches}</p>
              <br/>
              <p>currentTeam Id: {data?.playerInfo.currentTeam.id}</p>
              <p>currentTeam: {data?.playerInfo.currentTeam.name}</p>
              <p>currentTeam: {data?.playerInfo.currentTeam.link}</p>
              <br/>
              <p>primaryNumber: {data?.playerInfo.primaryNumber}</p>
              <p>primaryPosition: {data?.playerInfo.primaryPosition.code}</p>
              <p>primaryPosition: {data?.playerInfo.primaryPosition.name}</p>
              <p>primaryPosition: {data?.playerInfo.primaryPosition.type}</p>
              <p>primaryPosition: {data?.playerInfo.primaryPosition.abbreviation}</p>
              <br/>
              <p>rookie: {data?.playerInfo.rookie === true ? 'True' : 'False'}</p>
              <p>rosterStatus: {data?.playerInfo.rosterStatus}</p>
              <br/>
              <p>active: {data?.playerInfo.active === true ? 'True' : 'False'}</p>
              <p>captain: {data?.playerInfo.captain === true ? 'True' : 'False'}</p>
              <p>alternateCaptain: {data?.playerInfo.alternateCaptain === true ? 'True' : 'False'}</p>
              <p>birthCity: {data?.playerInfo.birthCity}</p>
              <p>birthCountry: {data?.playerInfo.birthCountry}</p>
              <p>birthDate: {data?.playerInfo.birthDate}</p>
              <p>birthStateProvince: {data?.playerInfo.birthStateProvince}</p>
              <p>assists: { data?.playerStats.assists }</p>
            </div>
            <PlayerCareerStats playerId={playerId} />
          </>
        )
      }    
    </div>

  )
}

export default PlayerPage
// assists
// : 
// 39
// blocked
// : 
// 38
// evenTimeOnIce
// : 
// "1220:58"
// evenTimeOnIcePerGame
// : 
// "14:53"
// faceOffPct
// : 
// 52.63
// gameWinningGoals
// : 
// 6
// games
// : 
// 82
// goals
// : 
// 27
// hits
// : 
// 109
// overTimeGoals
// : 
// 2
// penaltyMinutes
// : 
// "45"
// pim
// : 
// 45
// plusMinus
// : 
// -31
// points
// : 
// 66
// powerPlayGoals
// : 
// 11
// powerPlayPoints
// : 
// 30
// powerPlayTimeOnIce
// : 
// "334:19"
// powerPlayTimeOnIcePerGame
// : 
// "04:04"
// shifts
// : 
// 1844
// shortHandedGoals
// : 
// 0
// shortHandedPoints
// : 
// 0
// shortHandedTimeOnIce
// : 
// "03:14"
// shortHandedTimeOnIcePerGame
// : 
// "00:02"
// shotPct
// : 
// 10.27
// shots
// : 
// 263
// timeOnIce
// : 
// "1558:31"
// timeOnIcePerGame
// : 
// "19:00"