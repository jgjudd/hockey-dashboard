import { useQuery } from "react-query"
import { getFreeAgents } from "../../hooks/yahooHooks"

const FantasyFreeAgents = () => {
  const { data } = useQuery('yahooFreeAgents', getFreeAgents)
  console.log(data)
  return (
    <div className="flex">
      <div className="text-white">
        <h3>Centers</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <th className="text-left border border-slate-500">Player</th>
            <th className="text-left border border-slate-500">Position(s)</th>
            <th className="text-left border border-slate-500">% Owned</th>
          </thead>
          <tbody>
            {
              data?.centers.map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percentage_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="text-white">
        <h3>Left Wingers</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="text-left border border-slate-500">Player</th>
              <th className="text-left border border-slate-500">Position(s)</th>
              <th className="text-left border border-slate-500">% Owned</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.leftWingers.map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percentage_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="text-white">
        <h3>Right Wingers</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <th className="text-left border border-slate-500">Player</th>
            <th className="text-left border border-slate-500">Position(s)</th>
            <th className="text-left border border-slate-500">% Owned</th>
          </thead>
          <tbody>
            {
              data?.rightWingers.map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percentage_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="text-white">
        <h3>Defensemen</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <th className="text-left border border-slate-500">Player</th>
            <th className="text-left border border-slate-500">Position(s)</th>
            <th className="text-left border border-slate-500">% Owned</th>
          </thead>
          <tbody>
            {
              data?.defensemen.map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percentage_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="text-white">
        <h3>Goalies</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <th className="text-left border border-slate-500">Player</th>
            <th className="text-left border border-slate-500">Position(s)</th>
            <th className="text-left border border-slate-500">% Owned</th>
          </thead>
          <tbody>
            {
              data?.goalies.map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percentage_owned}</td>
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

export default FantasyFreeAgents
