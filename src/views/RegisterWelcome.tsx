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
      alignItems: "center",
      justifyContent: "center",
      marginBlockStart: "2rem",
      "& a": {
        textDecoration: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .item": {
          height: "fit-content",
          backgroundColor: "#FFEFEF",
          width: "40%",
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
            width: "100%",
            marginBlockEnd: "1rem",
          },
        },
      },
    },
  },
  "@media (max-width: 575px)": {
    register: {
      "& .select": {
        flexDirection: "column",
        "& a": {
          marginBlockStart: "1rem",
          "& .item": {
            width: "80%",
            marginInline: "0",
            padding: "1rem 0.5rem",
            "& img": {
              width: "50%",
              marginBlockEnd: "0.5rem",
            },
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
