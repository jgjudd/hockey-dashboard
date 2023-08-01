import axios from 'axios';

export const getAllTeams = async () => {
  const result = await axios.get("https://statsapi.web.nhl.com/api/v1/teams")

  const east = result.data.teams.filter(x => x.conference.name === 'Eastern')
  const west = result.data.teams.filter(x => x.conference.name === 'Western')

  // console.log('----------------------------')
  // console.log(east)
  // console.log('----------------------------')
  // console.log(west)

  return { east, west }
}
