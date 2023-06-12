import { createUseStyles } from "react-jss";
import ChatterLogo from "./ChatterLogo";
import Profile from "./Profile";
import Search from "./Search";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "50px",
    // height: "min-content",
    padding: "1rem",
    backgroundColor: "#fff",
    position: "fixed",
    top: 0,
    zIndex: "99",
  },
});

function Header() {
  const classes = useStyles();
  const user = true;
  return (
    <div className={classes.header}>
      <ChatterLogo />
      <Search />
      {user ? <Profile /> : ""}
    </div>
  );
}

export default Header;
