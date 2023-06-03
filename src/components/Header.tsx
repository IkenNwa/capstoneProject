import { createUseStyles } from "react-jss";
import ChatterLogo from "./ChatterLogo"
import Profile from "./Profile"
import Search from "./Search"

const useStyles = createUseStyles({
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: '50px',
        // height: "min-content",
        padding: "1rem",
        backgroundColor: "#fff",
        position: 'fixed',
        top: 0,
    },
});

function Header() {
    const classes = useStyles();
  return (
    <div className={classes.header}>
        <ChatterLogo />
        <Search />
        <Profile />
    </div>
  )
}

export default Header