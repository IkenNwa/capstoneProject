import { Link } from "react-router-dom";
import ChatterLogo from "../components/ChatterLogo";
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
          width: "100px",
          marginInline: "2rem",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #C80028",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "25px",
          color: "#C80028",
          textDecoration: "none",
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
        <Link to="/">
          <div className="item">
            <img src="/Chatter2Logo2.svg" alt="chatterLogo" />
            <p>Reader</p>
          </div>
        </Link>
        <Link to="/">
          <div className="item">
            <img src="/Chatter2Logo2.svg" alt="chatterLogo" />
            <p>Writer</p>
          </div>
        </Link>
      </div>
    </motion.main>
  );
}

export default RegisterWelcome;
