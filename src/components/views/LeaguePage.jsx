import { getStandings } from "../../hooks/leagueHooks"
import { useQuery } from 'react-query'

const LeaguePage = () => {
  const { data, isError, isLoading } = useQuery('standings', getStandings)
  console.log('data', data)
  return (
    <div className="overflow-auto flex justify-around border-b-2 border-slate-100 pb-10">
      { isError && <div>Error</div> }
      { isLoading && <div>Loading...</div> }

 
      <div>
        <h3 className="text-center">{data?.metropolitan?.division?.name}</h3>
        <ol>
          {
            data?.metropolitan?.teamRecords?.map(team => {
              return (
                  <li 
                    className="text-black-200"
                    key={team.team.id}
                  >
                    {team.team.name} ({team.points} Points)
                  </li>
              )
            })
          }
        </ol>
      </div>
      <div>
        <h3 className="text-center">{data?.atlantic?.division?.name}</h3>
        <ol>
          {
            data?.atlantic?.teamRecords?.map(team => {
              return (
                  <li className="text-black-200">{team?.team?.name} ({team?.points} Points)</li>
              )
            })
          }
        </ol>
      </div>
      <div>
        <h3 className="text-center">{data?.central?.division?.name}</h3>
        <ol>
          {
            data?.central?.teamRecords?.map(team => {
              return (
                  <li className="text-black-200">{team?.team?.name} ({team?.points} Points)</li>
              )
            })
          }
        </ol>
      </div>
      <div>
        <h3 className="text-center">{data?.pacific?.division?.name}</h3>
        <ol>
          {
            data?.pacific?.teamRecords?.map(team => {
              return (
                  <li className="text-black-200">{team?.team?.name} ({team?.points} Points)</li>
              )
            })
          }
        </ol>
      </div>
       


    </div>
  )
}

export default LeaguePage
