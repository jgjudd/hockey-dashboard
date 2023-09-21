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
export const getStandings = async () : Promise<Team[]> => {
  const { data } = await axios.get<Team[]>('http://127.0.0.1:5000/standings')
  return data
}