import { createUseStyles } from "react-jss";
import GLogo from "../assets/Google.svg";
import FLogo from "../assets/Facebook.svg";
import ChatterLogo from "../components/ChatterLogo";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  loginPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "inherit",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEFEF",
    borderRadius: "5px",
    padding: "2rem",
    width: "350px",
    border: "1px solid #C80028",
    boxShadow: "0 3px 7px 0 rgba(0,0,0,0.5)",
    "& form": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "& input": {
        width: "300px",
        height: "40px",
        borderRadius: "5px",
        border: "1px solid #C80028",
        outline: "none",
        padding: "0 1rem",
        margin: "0.5rem 0",
      },
      "& button": {
        width: "100px",
        height: "40px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        padding: "0 1rem",
        margin: "0.5rem 0",
        backgroundColor: "#C80028",
        color: "#fff",
        fontWeight: "light",
        cursor: "pointer",
      },
    },
    "& .divider": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& hr": {
        width: "100px",
        height: "1px",
        backgroundColor: "#fff",
        margin: "0 1rem",
      },
      "& p": {
        color: "#fff",
        fontSize: "1rem",
      },
    },
    "& .registerLink": {
      color: "#000",
      fontSize: "1rem",
      fontWeight: "lighter",
      marginTop: "1rem",
      "& a": {
        color: "#C80028",
        cursor: "pointer",
        textDecoration: "none",
      },
    },
    "& .otherLogin": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      "& .item": {
        width: "200px",
        height: "fit-content",
        borderRadius: "5px",
        border: "none",
        padding: "0.5rem 1rem",
        outline: "none",
        margin: "0.5rem 0.5rem",
        backgroundColor: "#fff",
        color: "#000",
        fontWeight: "light",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& img": {
          width: "30px",
          height: "30px",
          marginRight: "0.5rem",
        },
      },
    },
  },
});

function Login() {
  const classes = useStyles();
  return (
    <motion.main
      className={classes.loginPage}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, height:"100svh" }}
      exit={{ opacity: 0, height:"0svh", }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ChatterLogo />
      <div className={classes.loginContainer}>
        <form className="formContainer">
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <div className="divider">
          <hr /> OR <hr />
        </div>
        <div className="otherLogin">
          <div className="item">
            <img src={GLogo} alt="Google-Logo" />
            <p>Google</p>
          </div>
          <div className="item">
            <img src={FLogo} alt="Facebook-Logo" />
            <p>Facebook</p>
          </div>
        </div>
        <p className="registerLink">
          Need an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </div>
    </motion.main>
  );
}

export default Login;
