import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ChatterLogo from "../components/ChatterLogo";
import { motion } from "framer-motion";

const landingStyles = createUseStyles({
  landing: {
    display: "flex",
    height: "inherit",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& a": {
      "& button": {
        backgroundColor: "red",
        outline: "none",
        padding: "0.5rem",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
      },
    },
  },
});

function Landing() {
  const style = landingStyles();
  return (
    <motion.main
      className={style.landing}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1,  height: "100svh" }}
      exit={{ opacity: 0, height: "0svh", }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ChatterLogo />
      <h1>This is the Landing Page</h1>
      <Link to="/login">
        <button>Login here</button>
      </Link>
    </motion.main>
  );
}

export default Landing;
