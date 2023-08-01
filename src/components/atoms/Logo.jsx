
const Logo = ({ teamAbbreviation }) => {
  const imgUrl = `/src/components/assets/${teamAbbreviation}.png`

  return (
    <img src={imgUrl} />
  )
}

export default Logo
