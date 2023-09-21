import axios from 'axios';

export const getPlayerById = async (playerId) => {
  const result = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}`)
  const playerInfo = result?.data.people[0]

  const statResult = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=statsSingleSeason`)
  const playerStats = statResult
  console.log('STATS', playerStats)

  return { playerInfo, playerStats }
}
//https://statsapi.web.nhl.com/api/v1/people/ID/stats