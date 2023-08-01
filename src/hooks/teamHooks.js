import axios from 'axios';

export const getAllTeams = async () => {
  const result = await axios.get("https://statsapi.web.nhl.com/api/v1/teams")

  const easternConference = result.data.teams.filter(x => x.conference.name === 'Eastern')
  const westernConference = result.data.teams.filter(x => x.conference.name === 'Western')

  // console.log('----------------------------')
  // console.log(easternConference)
  // console.log('----------------------------')
  // console.log(westernConference)

  return { easternConference, westernConference }
}
