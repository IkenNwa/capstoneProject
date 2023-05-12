import { Link } from "react-router-dom";
import ChatterLogo from "../components/ChatterLogo";
import Pencil from "../assets/pencil.svg";
import Book from "../assets/book.svg";
import {motion} from "framer-motion"
import { createUseStyles } from "react-jss";

const registerW = createUseStyles({
  register: {
    display: "flex",
    height: "inherit",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .title": {
      color: "#C80028",
    },
    "& .select": {
      display: "flex",
      flexDirection: "row",
      height: "fit-content",
      alignItems: "space-around",
      justifyContent: "center",
      marginBlockStart: "2rem",
      "& a": {
        textDecoration: "none",
        cursor: "pointer",
        "& .item": {
          height: "fit-content",
          backgroundColor: "#FFEFEF",
          width: "fit-content",
          marginInline: "2rem",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #C80028",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "25px",
          color: "#C80028",
          textDecoration: "none",
          "& img": {
            width: "120px",
            marginBlockEnd: "1rem",
          },
        },
      },
    },
  },
});

function RegisterWelcome() {
  const classes = registerW();

  return (
    <motion.main
      className={classes.register}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, height: "100svh" }}
      exit={{ opacity: 0, height: "0svh" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ChatterLogo />
      <p className="title">I am a</p>
      <div className="select">
        <Link to="/register/reader">
          <div className="item">
            <img src={Book} alt="chatterLogo" />
            <p>Reader</p>
          </div>
        </Link>
        <Link to="/register/writer">
          <div className="item">
            <img src={Pencil} alt="chatterLogo" />
            <p>Writer</p>
          </div>
        </Link>
      </div>
    </motion.main>
  );
}

export default RegisterWelcome;
