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

export const getTeamDataById = async (teamId) => {
  const teamBioResult = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}`)
  const result = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}/stats`)
  const playersByTeam = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.roster`)
  // console.log('------------Team-Info-----------')
  // console.log(result.data.stats[0].splits[0].team)
  const teamInfo = teamBioResult.data.teams[0];

  // console.log('------------Team-Stats-----------')
  // console.log(result.data.stats[0].splits[0].stat)
  const teamStats = result.data.stats[0].splits[0].stat;

  // console.log('------------Team-Stat-Rankings-----------')
  // console.log(result.data.stats[1].splits[0].stat)
  const teamStatRankings = result.data.stats[1].splits[0].stat

  // console.log('------------playersByTeam.data.teams[0].roster.roster-----------')
  // console.log(playersByTeam.data.teams[0].roster.roster)
  const forwards = playersByTeam.data.teams[0].roster.roster.filter(player => player.position.code !== 'D' && player.position.code !== 'G')
  const defensemen = playersByTeam.data.teams[0].roster.roster.filter(player => player.position.code === 'D')
  const goalies = playersByTeam.data.teams[0].roster.roster.filter(player => player.position.code === 'G')

  return { teamInfo, teamStats, teamStatRankings, forwards, defensemen, goalies }
}
