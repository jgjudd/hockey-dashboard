import { useQuery } from "react-query"
import { getFreeAgents } from "../../hooks/yahooHooks"

const FantasyFreeAgents = () => {
  const { data } = useQuery('yahooFreeAgents', getFreeAgents)
  // console.log(data)
  return (
    <>
    <div className="flex justify-center">
      <div className="text-white text-center">
        <h3>Players</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="px-2 text-center border border-slate-500">Player</th>
              <th className="px-2 text-center border border-slate-500">Position(s)</th>

              <th className="px-2 text-center border border-slate-500">% Owned</th>
              <th className="px-2 text-center border border-slate-500">Status</th>

              <th className="px-2 text-center border border-slate-500">+/-</th>
              <th className="px-4 text-center border border-slate-500">A</th>

              <th className="px-2 text-center border border-slate-500">Avg-PPT</th>
              <th className="px-2 text-center border border-slate-500">Avg-SHT</th>

              <th className="px-2 text-center border border-slate-500">COR</th>
              <th className="px-2 text-center border border-slate-500">Def-ZS</th>

              <th className="text-center border border-slate-500">FEN</th>
              <th className="text-center border border-slate-500">G</th>

              <th className="text-center border border-slate-500">GP</th>
              <th className="text-center border border-slate-500">GStr</th>

              <th className="text-center border border-slate-500">GWG</th>
              <th className="text-center border border-slate-500">HIT</th>

              <th className="text-center border border-slate-500">Off-ZS</th>
              <th className="text-center border border-slate-500">P</th>

              <th className="text-center border border-slate-500">PIM</th>
              <th className="text-center border border-slate-500">PPA</th>

              <th className="text-center border border-slate-500">PPG</th>
              <th className="text-center border border-slate-500">PPP</th>

              <th className="text-center border border-slate-500">PPT</th>
              <th className="text-center border border-slate-500">S%</th>

              <th className="text-center border border-slate-500">SHA</th>
              <th className="text-center border border-slate-500">SHG</th>

              <th className="text-center border border-slate-500">SHT</th>
              <th className="text-center border border-slate-500">SOG</th>

              <th className="text-center border border-slate-500">Shifts</th>
              <th className="text-center border border-slate-500">ZS-Pct</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.filter(player =>  player.position_type == 'P')
              .sort((a,b) => b.percent_owned - a.percent_owned)
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>
                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>

                    <td className="border border-slate-500">{player.percent_owned}</td>
                    <td className="border border-slate-500">{player.status}</td>

                    <td className="border border-slate-500">{player["+/-"]}</td>
                    <td className="border border-slate-500">{player.A}</td>

                    <td className="border border-slate-500">{player["Avg-PPT"]}</td>
                    <td className="border border-slate-500">{player["Avg-SHT"]}</td>

                    <td className="border border-slate-500">{player.COR}</td>
                    <td className="border border-slate-500">{player["Def-ZS"]}</td>

                    <td className="border border-slate-500">{player.FEN}</td>
                    <td className="border border-slate-500">{player.G}</td>

                    <td className="border border-slate-500">{player.GP}</td>
                    <td className="border border-slate-500">{player.GStr}</td>

                    <td className="border border-slate-500">{player.GWG}</td>
                    <td className="border border-slate-500">{player.HIT}</td>

                    <td className="border border-slate-500">{player["Off-ZS"]}</td>
                    <td className="border border-slate-500">{player.P}</td>

                    <td className="border border-slate-500">{player.PIM}</td>
                    <td className="border border-slate-500">{player.PPA}</td>

                    <td className="border border-slate-500">{player.PPG}</td>
                    <td className="border border-slate-500">{player.PPP}</td>

                    <td className="border border-slate-500">{player.PPT}</td>
                    <td className="border border-slate-500">{player["S%"]}</td>
                    
                    <td className="border border-slate-500">{player.SHA}</td>
                    <td className="border border-slate-500">{player.SHG}</td>

                    <td className="border border-slate-500">{player.SHT}</td>
                    <td className="border border-slate-500">{player.SOG}</td>
                   
                    <td className="border border-slate-500">{player.Shifts}</td>
                    <td className="border border-slate-500">{player["ZS-Pct"]}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="text-white text-center">
        <h3>Goalies</h3>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="text-center border border-slate-500">Player</th>

              <th className="text-center border border-slate-500">Position(s)</th>
              <th className="text-center border border-slate-500">% Owned</th>

              <th className="text-center border border-slate-500">GA</th>
              <th className="text-center border border-slate-500">GAA</th>

              <th className="text-center border border-slate-500">GP</th>
              <th className="text-center border border-slate-500">GS</th>

              <th className="text-center border border-slate-500">L</th>
              <th className="text-center border border-slate-500">MIN</th>

              <th className="text-center border border-slate-500">SA</th>
              <th className="text-center border border-slate-500">SHO</th>

              <th className="text-center border border-slate-500">SV</th>
              <th className="text-center border border-slate-500">SV%</th>

              <th className="text-center border border-slate-500">W</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.filter(player => player.position_type == 'G')
              .map(player => {
                return (
                  <tr key={player.player_id}>
                    <td className="border border-slate-500">{player.name}</td>

                    <td className="border border-slate-500">{player.eligible_positions.join()}</td>
                    <td className="border border-slate-500">{player.percent_owned}</td>

                    <td className="border border-slate-500">{player.GA}</td>
                    <td className="border border-slate-500">{player.GAA}</td>
                    
                    <td className="border border-slate-500">{player.GP}</td>
                    <td className="border border-slate-500">{player.GS}</td>

                    <td className="border border-slate-500">{player.L}</td>
                    <td className="border border-slate-500">{player.MIN}</td>

                    <td className="border border-slate-500">{player.SA}</td>
                    <td className="border border-slate-500">{player.SHO}</td>

                    <td className="border border-slate-500">{player.SV}</td>
                    <td className="border border-slate-500">{player["SV%"]}</td>

                    <td className="border border-slate-500">{player.W}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

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
    </>
  )
}

export default FantasyFreeAgents
