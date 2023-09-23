import { useQuery } from "react-query"
import { getStandings } from '../../hooks/yahooHooks'

const FantasyStandings = () => {
  const { data, isLoading, isError } = useQuery('yahoo-standings', getStandings)

  return (
    <div className="text-white w-full flex justify-center">
      { isLoading && <div>Loading...</div> }
      { isError && <div>Error Loading Standings</div> }
      {
        data && (
          <table className="ml-8 table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-500 px-2">Rank</th>
              <th className="border border-slate-500 px-8">Name</th>
              <th className="border border-slate-500 px-8">Season Record</th>
              <th className="border border-slate-500 px-8">Playoff Seed</th>
              <th className="border border-slate-500 px-8">Win Percentage</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map(team => {
                return (
                  <tr key={team.name} className="bg-white-100">
                    <td className="border border-slate-500 text-center">{team.rank}</td>
                    <td className="border border-slate-500 text-center px-8 hover:leading-10">
                      <button>
                        {team.name}
                      </button>
                    </td>
                    <td className="border border-slate-500 text-center">{team.outcome_totals.wins}-{team.outcome_totals.losses}-{team.outcome_totals.ties}</td>
                    <td className="border border-slate-500 text-center">{team.playoff_seed}</td>
                    <td className="border border-slate-500 text-center">{team.outcome_totals.percentage}</td>
                  </tr>
                )
              })
            }
          </tbody>
          </table>
        )
      }
    </div>
  )
}

export default FantasyStandings
