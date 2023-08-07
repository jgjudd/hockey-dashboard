import { useParams } from "react-router-dom"
import { getPlayerById } from "../../hooks/playerHooks"
import { useQuery } from "react-query"

const PlayerPage = () => {
  const { playerId } = useParams()

  const { isLoading, isError, data } = useQuery(['player', playerId], () => getPlayerById(playerId))
  console.log('data', data)

  return (
    <>
      { isError && <div>Error Loading Player Data...</div> }
      { isLoading && <div>Loading...</div> }
      {
        data && (
          <div className="ml-8 text-white">
            <h1 className="text-2xl">Full Name: {data?.fullName}</h1>
            <br/>
            <p>Player Id: {playerId}</p>
            <p>Player Id (from response): {data?.id}</p>
            <p>Link: {data?.link}</p>
            <br/>
            <p>nationality: {data?.nationality}</p>
            <p>First Name: {data?.firstName}</p>
            <p>Last Name: {data?.lastName}</p>
            <p>Full Name: {data?.fullName}</p>
            <br/>
            <p>currentAge: {data?.currentAge}</p>
            <p>height: {data?.height}</p>
            <p>weight: {data?.weight}</p>
            <p>shootsCatches: {data?.shootsCatches}</p>
            <br/>
            <p>currentTeam Id: {data?.currentTeam.id}</p>
            <p>currentTeam: {data?.currentTeam.name}</p>
            <p>currentTeam: {data?.currentTeam.link}</p>
            <br/>
            <p>primaryNumber: {data?.primaryNumber}</p>
            <p>primaryPosition: {data?.primaryPosition.code}</p>
            <p>primaryPosition: {data?.primaryPosition.name}</p>
            <p>primaryPosition: {data?.primaryPosition.type}</p>
            <p>primaryPosition: {data?.primaryPosition.abbreviation}</p>
            <br/>
            <p>rookie: {data?.rookie === true ? 'True' : 'False'}</p>
            <p>rosterStatus: {data?.rosterStatus}</p>
            <br/>
            <p>active: {data?.active === true ? 'True' : 'False'}</p>
            <p>captain: {data?.captain === true ? 'True' : 'False'}</p>
            <p>alternateCaptain: {data?.alternateCaptain === true ? 'True' : 'False'}</p>
            <p>birthCity: {data?.birthCity}</p>
            <p>birthCountry: {data?.birthCountry}</p>
            <p>birthDate: {data?.birthDate}</p>
            <p>birthStateProvince: {data?.birthStateProvince}</p>

          </div>
        )
      }    
    </>

  )
}

export default PlayerPage
