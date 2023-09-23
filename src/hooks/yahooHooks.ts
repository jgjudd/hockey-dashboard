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
  percentage_owned?: number
}

export const getStandings = async () : Promise<Team[]> => {
  const { data } = await axios.get<Team[]>('http://127.0.0.1:5000/standings')
  return data
}

export const getMyRoster = async () : Promise<Player[]> => {
  const { data } = await axios.get<Player[]>('http://127.0.0.1:5000/roster')
  return data
}

type FreeAgents = {
  centers: Player[]
  leftWingers: Player[]
  rightWingers: Player[]
  defensemen: Player[]
  goalies: Player[]
}
export const getFreeAgents = async () : Promise<FreeAgents> => {
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

  return { 
    centers: centers,
    leftWingers: leftWingers,
    rightWingers: rightWingers,
    defensemen: defensemen,
    goalies: goalies
  }
}