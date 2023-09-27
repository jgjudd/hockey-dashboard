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
// type EligiblePositions = 'C' | 'LW' | 'RW' | 'D' | 'G' | 'Util'

// type PositionType = 'P' | 'G' | 'p' | 'g'

// type Player = {
//   eligible_positions: EligiblePositions[];
//   name: string,
//   player_id: number,
//   position_type: PositionType,
//   selected_position: EligiblePositions | 'BN',
//   status: string
//   percent_owned: number
// }

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

type Position = "C" | "LW" |"RW" | "D" | "G" | "Util"

type FreeAgent = {
  "+/-": number | "-",
  "A": number | "-",
  "Avg-PPT": number | "-",
  "Avg-SHT": number | "-",
  "COR": number | "-",
  "Def-ZS": number | "-",
  "FEN": number | "-",
  "G": number | "-",
  "GP": number | "-",
  "GStr": number | "-",
  "GWG": number | "-",
  "HIT": number | "-",
  "Off-ZS": number | "-",
  "P": number | "-",
  "PIM": number | "-",
  "PPA": number | "-",
  "PPG": number | "-",
  "PPP": number | "-",
  "PPT": number | "-",
  "S%": number | "-",
  "SHA": number | "-",
  "SHG": number,
  "SHT": number | "-",
  "SOG": number | "-",
  "Shifts": number | "-",
  "ZS-Pct": number | "-",
  "eligible_positions": Position[]
  "name": string,
  "percent_owned": number,
  "player_id": number,
  "position_type": "P" | "G",
  "status": string
  "GA": number | "-",
  "GAA": number | "-",
  "GS": number | "-",
  "L": number | "-",
  "MIN": "3,004:55",
  "SA": number | "-",
  "SHO": number | "-",
  "SV": number | "-",
  "SV%": number | "-",
  "W": number | "-",
}

export const getFreeAgents = async () : Promise<FreeAgent[]> => {
  const freeAgents = await axios.get<FreeAgent[]>('http://127.0.0.1:5000/freeAgents')
  return freeAgents.data
}