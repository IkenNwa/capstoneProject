import { createUseStyles } from "react-jss"
 const logoStyle= createUseStyles({
  logo : {
    display: "flex",
    height: "fit-content",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    marginBlock: "1rem"
  }
 })

function ChatterLogo() {
  const classes = logoStyle()
  return (
    <div className={classes.logo}>
        <img src="/Chatter2Logo2.svg" alt="Chatter-Logo" />
        <h4>Papyrus</h4>
    </div>
  )
}

export default ChatterLogo