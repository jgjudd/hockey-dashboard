// https://statsapi.web.nhl.com/api/v1/standings
import axios from 'axios';

export const getStandings = async () => {
  try {
    const result = await axios.get("https://statsapi.web.nhl.com/api/v1/standings")

    return {
      metropolitan: result.data.records[0],
      atlantic: result.data.records[1],
      central: result.data.records[2],
      pacific: result.data.records[3]
    }
  }
  catch (e) {
    console.log(e)
  }
  // console.log(result)
  // console.log(result.data)
  // console.log(result.data.records)
  // console.log(result.data.records[0])
  // console.log(result.data.records[1])
  // console.log(result.data.records[2])
  // console.log(result.data.records[3])


}

export const getCareerStats = async (playerId) => {
  // https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=yearByYear
  const result = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=yearByYear`)
  return result
}
