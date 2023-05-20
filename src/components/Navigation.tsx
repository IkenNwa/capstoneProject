import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { RiHome6Fill } from "react-icons/ri";
import {RxDashboard} from "react-icons/rx";
import {MdFeed} from "react-icons/md";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FFEFEF",
    padding: "0 5rem",
    height: "100svh",
    "@media (max-width: 768px)": {
      flexDirection: "row",
      justifyContent: "center",
      padding: "2rem 0",
      height: "10svh",
      width: "100%",
    },
    "& ul": {
      display: "column",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      listStyle: "none",
      height: "fit-content",
      padding: "0",
      //mobile
      "@media (max-width: 768px)": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "0",
      },
      "& .pro": {
        backgroundColor: "#C80028",
        color: "#fff",
        fontWeight: "light",
        borderRadius: "5px",
      },
      "& li": {
        margin: "0.5rem 0",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        backgroundColor: "#FFF",
        border: "1px solid #C80028",
        cursor: "pointer",
        width: "70px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "fit-content",
        //mobile
        "@media (max-width: 768px)": {
          margin: "0 1rem",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          border: "1px solid #C80028",
        },

        "& a": {
          textDecoration: "none",
          fontWeight: "light",
          color: "#44000E",
        },
      },
    },
  },
});

function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
     <ul>
        <li>
          <Link to="/home">
            <RiHome6Fill />
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <RxDashboard />
          </Link>
        </li>
        <li>
          <Link to="/feed">
            <MdFeed />
          </Link>
        </li>
        <li className="pro">
          <Link to="/pro">PRO</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
