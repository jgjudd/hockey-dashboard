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
        <h3 className="text-center text-slate-800 underline">{data?.metropolitan?.division?.name}</h3>
        <ol className="list-decimal mt-2">
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
        <h3 className="text-center text-slate-800 underline">{data?.atlantic?.division?.name}</h3>
        <ol className="list-decimal mt-2">
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
        <h3 className="text-center text-slate-800 underline">{data?.central?.division?.name}</h3>
        <ol className="list-decimal mt-2">
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
        <h3 className="text-center text-slate-800 underline">{data?.pacific?.division?.name}</h3>
        <ol className="list-decimal mt-2">
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
