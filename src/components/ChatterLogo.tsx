import { createUseStyles } from "react-jss"
 const logoStyle= createUseStyles({
  logo : {
    display: "flex",
    height: "fit-content",
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    "& h4": {
      fontSize: "1rem",
      fontWeight: "lighter",
      color: "#44000E",
    },
    "& img": {
      width: "50px",
      height: "50px",
    },
  },
  "@media (max-width: 650px)": {
    logo: {
      "& h4": {
        display: "none",
      },
    },
  },

 })

function ChatterLogo() {
  const classes = logoStyle()
  return (
    <div className={classes.logo}>
        <img src="/Chatter2Logo2.svg" alt="Chatter-Logo" />
        <h4>Chatter</h4>
    </div>
  )
}

export default ChatterLogo