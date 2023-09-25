import axios from "axios";

type Outcomes = {
  losses: string;
  percentage: string;
  ties: string;
  wins: string;
}
type Team = {
  name: string;
  outcome_totals: Outcomes
  playoff_seed: string;
  rank: number;
  team_key: string;
}
type EligiblePositions = 'C' | 'LW' | 'RW' | 'D' | 'G' | 'Util'

type PositionType = 'P' | 'G' | 'p' | 'g'

type Player = {
  eligible_positions: EligiblePositions[];
  name: string,
  player_id: number,
  position_type: PositionType,
  selected_position: EligiblePositions | 'BN',
  status: string
  percent_owned: number
}

export const getStandings = async () : Promise<Team[]> => {
  const { data } = await axios.get<Team[]>('http://127.0.0.1:5000/standings')
  return data
}

type PlayerStats = {
  "+/-": number | "-",
  "A": number | "-",
  "Avg-PPT": number | "-",
  "Avg-SHT": number | "-",
  "COR": "-",
  "Def-ZS": "-",
  "FEN": "-",
  "G": number | "-",
  "GP": number | "-",
  "GStr": "-",
  "GWG": number | "-",
  "HIT": number | "-",
  "Off-ZS": "-",
  "P": number | "-",
  "PIM": number | "-",
  "PPA": number | "-",
  "PPG": number | "-",
  "PPP": number | "-",
  "PPT": number | "-",
  "S%": number | "-",
  "SHA": number | "-",
  "SHG": number | "-",
  "SHT": number | "-",
  "SOG": number | "-",
  "Shifts": number | "-",
  "ZS-Pct": "-",
  "name": string,
  "player_id": number | "-",
  "position_type": string,
  "GA": number | "-",
  "GAA": number | "-",
  "GS": number | "-",
  "L": number | "-",
  "MIN": string,
  "SA": number | "-",
  "SHO": number | "-",
  "SV": number | "-",
  "SV%": number | "-",
  "W": number | "-",
}

export const getMyRoster = async () : Promise<PlayerStats[]> => {
  const { data } = await axios.get<PlayerStats[]>('http://127.0.0.1:5000/roster')
  return data
}


export const getFreeAgents = async () : Promise<Player[]> => {
  const c = axios.get<Player[]>('http://127.0.0.1:5000/freeAgents/C')
  const lw = axios.get<Player[]>('http://127.0.0.1:5000/freeAgents/LW')
  const rw = axios.get<Player[]>('http://127.0.0.1:5000/freeAgents/RW')
  const d = axios.get<Player[]>('http://127.0.0.1:5000/freeAgents/D')
  const g = axios.get<Player[]>('http://127.0.0.1:5000/freeAgents/G')

  const data = await axios.all([c, lw, rw, d, g])

  const centers = data[0].data
  const leftWingers = data[1].data
  const rightWingers = data[2].data
  const defensemen = data[3].data
  const goalies = data[4].data

  const results: Player[] = [ ...centers, ...leftWingers, ...rightWingers, ...defensemen, ...goalies ]
  
  const playerIds: number[] = []
  
  const freeAgents: Player[] = results.filter(player => {
    const isDuplicate = playerIds.includes(player.player_id)

    if (!isDuplicate) {
      playerIds.push(player.player_id)
      return true
    }
    return false
  })



  // return { 
  //   centers: centers,
  //   leftWingers: leftWingers,
  //   rightWingers: rightWingers,
  //   defensemen: defensemen,
  //   goalies: goalies
  // }
  return freeAgents
}