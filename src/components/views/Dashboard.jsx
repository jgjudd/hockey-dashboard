
import TeamCard from '../atoms/TeamCard'
import { getAllTeams } from '../../hooks/teamHooks'
// import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const Dashboard = () => {
  // const [easternConference, setEasternConference] = useState([])
  // const [westernConference, setWesternConference] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  
  // useEffect(() => {

  //   const fetch = async () => {
  //     const { east, west } = await getAllTeams()

  //     setEasternConference(east)
  //     setWesternConference(west)
  //     setIsLoading(false)
  //   }

  //   fetch()
  // }, [])

  const { isLoading, isError, data } = useQuery('teams', getAllTeams)
  // console.log(data)
  return (
    <>
    { isError && <div>Something went wrong with the teams query</div>}
    { isLoading ? 
        <h2>Loading...</h2>
      :
        <div className="mx-2 my-4">
          <h2 className="text-xl text-white my-4">Eastern Conference</h2>
          <div className="grid gap-4 grid-cols-3 justify-center">
            {
              data?.easternConference?.map((team, i) => <TeamCard teamInfo={team} key={i} />)
            }
          </div>

          <h2 className="text-xl text-white mx-2 my-4">Western Conference</h2>
          <div className="grid gap-4 grid-cols-3">
            {
              data?.westernConference?.map((team, i) => <TeamCard teamInfo={team} key={i} />)
            }
          </div>
        </div>
    }
    </>
  )
}
export default Dashboard
