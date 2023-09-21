import { useState, useEffect } from "react"
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

const Fantasy = () => {
  const [standings, setStandings] = useState<Team[]>([])

  useEffect(() => {
    const getStandings = async () => {
      const { data } = await axios.get<Team[]>('http://127.0.0.1:5000/standings')
      setStandings(data)
    }

    getStandings()
  }, [])

  return (
    <div className="text-white">
      <h1>Standings</h1>
      {
        standings?.map(team => {
          return (
            <div key={team.name}>
              <h3>{team.name}</h3>
              <p>Rank: {team.rank}</p>
              <p>Playoff Seed: {team.playoff_seed}</p>
              <p>{team.outcome_totals.wins} - {team.outcome_totals.losses} - {team.outcome_totals.ties}</p>
              <p>Win Percentage: {team.outcome_totals.percentage}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Fantasy
