/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import ChatterLogo from "../components/ChatterLogo";
import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import OtherLogin from "../components/OtherLogin";
import { useContext, useEffect, useState } from "react";
import { getRedirectResult, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { UserContext } from "../context";
import SEO from "../components/SEO";

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
      "& .ptag":{
        color: "#C80028",
        fontSize: "12px",
        fontWeight: "bold",
      }
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Login() {
  const { user, setUser } = useContext<any>(UserContext);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMsg("")
    }, 5000);
  }, [msg])
  

  const handleLogin = (e: any) => {
    e.preventDefault();
    setMsg("Logging you in");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        setUser(result.user);
        // ...
      })
      .catch(() => {
        setMsg("Check Your Details...");
      });
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setMsg("Please Wait...");

          setUser(result.user);
        }
      })
      .catch(() => {
        setMsg("Do you have an account!");
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {user ? (
        <Navigate to="/u/dashboard" />
      ) : (
        <motion.main
          className={classes.loginPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, height: "100svh" }}
          exit={{ opacity: 0, height: "0svh" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SEO title="Login to Chatter" />
          <ChatterLogo />
          <div className={classes.loginContainer}>
            <form className="formContainer">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button type="submit" onClick={handleLogin}>
                Login
              </button>
              <p className="ptag">
                <i>{msg}</i>
              </p>
            </form>
            <div className="divider">
              <hr /> OR <hr />
            </div>
            <OtherLogin />
            <p className="registerLink">
              Need an account?{" "}
              <Link to="/register">
                <span>Register</span>
              </Link>
            </p>
          </div>
        </motion.main>
      )}
    </>
  );
}

export default Login;
