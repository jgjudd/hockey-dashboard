import { useQuery } from "react-query"
import { getFreeAgents } from "../../hooks/yahooHooks"

const FantasyFreeAgents = () => {
  const { data } = useQuery('yahooFreeAgents', getFreeAgents)
  // console.log(data)
  return (
    <div className="flex justify-center">
      <div className="text-white text-center">
        <h3>Centers</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <th className="text-center border border-slate-500">Player</th>
            <th className="text-center border border-slate-500">Position(s)</th>
            <th className="text-center border border-slate-500">% Owned</th>
          </thead>
          <tbody>
            {
              data?.filter(player => player.percent_owned > 0)
              .sort((a,b) => b.percent_owned - a.percent_owned)
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percent_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      {/* <div className="text-white">
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
              data?.leftWingers
              .filter(player => player.percent_owned > 0)
              .sort((a,b) => b.percent_owned - a.percent_owned)
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percent_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div> */}

      {/* <div className="text-white">
        <h3>Right Wingers</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <th className="text-left border border-slate-500">Player</th>
            <th className="text-left border border-slate-500">Position(s)</th>
            <th className="text-left border border-slate-500">% Owned</th>
          </thead>
          <tbody>
            {
              data?.rightWingers
              .filter(player => player.percent_owned > 0)
              .sort((a,b) => b.percent_owned - a.percent_owned)
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percent_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div> */}

      {/* <div className="text-white">
        <h3>Defensemen</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <th className="text-left border border-slate-500">Player</th>
            <th className="text-left border border-slate-500">Position(s)</th>
            <th className="text-left border border-slate-500">% Owned</th>
          </thead>
          <tbody>
            {
              data?.defensemen
              .filter(player => player.percent_owned > 0)
              .sort((a,b) => b.percent_owned - a.percent_owned)
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percent_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div> */}

      {/* <div className="text-white">
        <h3>Goalies</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <th className="text-left border border-slate-500">Player</th>
            <th className="text-left border border-slate-500">Position(s)</th>
            <th className="text-left border border-slate-500">% Owned</th>
          </thead>
          <tbody>
            {
              data?.goalies
              .filter(player => player.percent_owned > 0)
              .sort((a,b) => b.percent_owned - a.percent_owned)
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percent_owned}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div> */}
    </div>
  )
}

export default FantasyFreeAgents
