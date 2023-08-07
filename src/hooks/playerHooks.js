import axios from 'axios';

export const getPlayerById = async (playerId) => {
  const result = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}`)
  const playerInfo = result?.data.people[0]

  return playerInfo
}