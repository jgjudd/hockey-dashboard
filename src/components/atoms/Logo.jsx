
const Logo = ({ teamAbbreviation }) => {
  const imgUrl = `/src/components/assets/${teamAbbreviation}.png`

  return (
    <img src={imgUrl} className="rounded" />
  )
}

export default Logo
