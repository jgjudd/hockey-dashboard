import { useQuery } from 'react-query'
import { getMyRoster } from '../../hooks/yahooHooks'

const FantasyRoster = () => {
  const { data } = useQuery('my-roster', getMyRoster)

  return (
    <div className='flex flex-column justify-center'>
      <div className="text-white text-center">
        <h3 className='m-2'>Players</h3>
        <table className="w-full table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="text-center px-2 border border-slate-500">Player</th>
              <th className="text-center px-2 border border-slate-500">Player ID</th>
              <th className="text-center px-2 border border-slate-500">Games Played</th>
              <th className="text-center px-2 border border-slate-500">+/-</th>
              <th className="text-center px-2 border border-slate-500">Goals</th>
              <th className="text-center px-2 border border-slate-500">Assists</th>
              <th className="text-center px-2 border border-slate-500">Points</th>
              <th className="text-center px-2 border border-slate-500">PIM</th>
              <th className="text-center px-2 border border-slate-500">PPG</th>
              <th className="text-center px-2 border border-slate-500">PPA</th>
              <th className="text-center px-2 border border-slate-500">Shots On Goal</th>
              <th className="text-center px-2 border border-slate-500">Total Shots</th>
              <th className="text-center px-2 border border-slate-500">Shot %</th>
              <th className="text-center px-2 border border-slate-500">Shifts</th>
              <th className="text-center px-2 border border-slate-500">Zone %</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.filter(player => player.position_type === 'P')  
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.player_id}</td>
                    <td className="border border-slate-500">{player.GP}</td>
                    <td className="border border-slate-500">{player['+/-']}</td>
                    <td className="border border-slate-500">{player.G}</td>
                    <td className="border border-slate-500">{player.A}</td>
                    <td className="border border-slate-500">{player.P}</td>
                    <td className="border border-slate-500">{player.PIM}</td>
                    <td className="border border-slate-500">{player.PPG}</td>
                    <td className="border border-slate-500">{player.PPA}</td>
                    <td className="border border-slate-500">{player.SOG}</td>
                    <td className="border border-slate-500">{player.SHT}</td>
                    <td className="border border-slate-500">{player['S%']}</td>
                    <td className="border border-slate-500">{player.Shifts}</td>
                    <td className="border border-slate-500">{player['ZS-Pct']}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        <h3 className='m-2'>Goalies</h3>
        <table className="w-full table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="text-center px-2 border border-slate-500">Player</th>
              <th className="text-center px-2 border border-slate-500">Player ID</th>
              <th className="text-center px-2 border border-slate-500">GP</th>
              <th className="text-center px-2 border border-slate-500">GA</th>
              <th className="text-center px-2 border border-slate-500">GAA</th>
              <th className="text-center px-2 border border-slate-500">GS</th>
              <th className="text-center px-2 border border-slate-500">W</th>
              <th className="text-center px-2 border border-slate-500">L</th>
              <th className="text-center px-2 border border-slate-500">MIN</th>
              <th className="text-center px-2 border border-slate-500">SA</th>
              <th className="text-center px-2 border border-slate-500">SHO</th>
              <th className="text-center px-2 border border-slate-500">SV</th>
              <th className="text-center px-2 border border-slate-500">SV%</th>
              
            </tr>
          </thead>
          <tbody>
            {
              data?.filter(player => player.position_type === 'G')  
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.player_id}</td>
                    <td className="border border-slate-500">{player.GP}</td>
                    <td className="border border-slate-500">{player.GA}</td>
                    <td className="border border-slate-500">{player.GAA}</td>

                    <td className="border border-slate-500">{player.GS}</td>
                    <td className="border border-slate-500">{player.W}</td>
                    <td className="border border-slate-500">{player.L}</td>
                    <td className="border border-slate-500">{player.MIN}</td>
                    <td className="border border-slate-500">{player.SA}</td>
                    <td className="border border-slate-500">{player.SHO}</td>
                    <td className="border border-slate-500">{player.SV}</td>
                    <td className="border border-slate-500">{player['SV%']}</td>
                    
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FantasyRoster
