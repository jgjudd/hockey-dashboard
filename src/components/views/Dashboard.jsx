
import TeamCard from '../atoms/TeamCard'
import { getAllTeams } from '../../hooks/teamHooks'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [easternConference, setEasternConference] = useState([])
  const [westernConference, setWesternConference] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {

    const fetch = async () => {
      const { east, west } = await getAllTeams()

      setEasternConference(east)
      setWesternConference(west)
      setIsLoading(false)
    }

    fetch()
  }, [])

  return (
    <>
    { isLoading ? 
        <h2>Loading...</h2>
      :
        <div className="mx-2 my-4">
          <h2 className="text-xl my-4">Eastern Conference</h2>
          <div className="grid gap-4 grid-cols-3 justify-stretch">
            {
              easternConference?.map((team, i) => <TeamCard teamInfo={team} key={i} />)
            }
          </div>

          <h2 className="text-xl mx-2 my-4">Western Conference</h2>
          <div className="grid gap-4 grid-cols-3 justify-stretch">
            {
              westernConference?.map((team, i) => <TeamCard teamInfo={team} key={i} />)
            }
          </div>
        </div>
    }
    </>
  )
}
export default Dashboard
