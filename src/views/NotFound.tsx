import { createUseStyles } from "react-jss";
import BackBtn from "../components/BackBtn";
import ChatterLogo from "../components/ChatterLogo";

const styles = createUseStyles({
  page:{
    display: "flex",
    flexDirection: "column",
    height: "100svh",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
})

function NotFound() {
  const classes = styles()
  return (
    <div className={classes.page}>
      <ChatterLogo />
      <h1>The Page you are looking for cannot be Found.</h1>
      <BackBtn />
    </div>
  );
}

export default NotFound;
