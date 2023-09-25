import { getCareerStats } from "../../hooks/leagueHooks"
import { useQuery } from "react-query"

const PlayerCareerStats = ({ playerId }) => {
  const { data } = useQuery('player-career-stats', () => getCareerStats(playerId))
  // console.log('player data')
  // console.log(data.data.stats[0].splits)
  const playerStats = data?.data.stats[0].splits

  return (
    <div className="text-white text-center">
      <h3>PlayerCareerStats</h3>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>League</th>
            <th>Team</th>
            <th>Games Played</th>
            <th>G</th>
            <th>A</th>
            <th>P</th>
            <th>PIM</th>
          </tr>
        </thead>
        <tbody>
          {
            playerStats?.map(season => {
              return (
                <tr>
                  <td className="px-4">{season.season}</td>
                  <td className="px-4">{season.league.name}</td>
                  <td className="px-4">{season.team.name}</td>
                  <td className="px-4">{season.stat.games}</td>
                  <td className="px-4">{season.stat.goals}</td>
                  <td className="px-4">{season.stat.assists}</td>
                  <td className="px-4">{season.stat.points}</td>
                  <td className="px-4">{season.stat.pim}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PlayerCareerStats