/* eslint-disable @typescript-eslint/no-explicit-any */
// Date: 9/4/2021
// Note: React Router v6

import { Link, Navigate } from "react-router-dom";
import ChatterLogo from "../components/ChatterLogo";
import { createUseStyles } from "react-jss";
import { motion } from "framer-motion";
import {
  auth,
  getRedirectResult,
  createUserWithEmailAndPassword,
} from "../config";
import { useEffect, useState } from "react";
import OtherLogin from "../components/OtherLogin";
import { useContext } from "react";
import { UserContext } from "../context";
import { signInWithEmailAndPassword } from "firebase/auth";

const useStyles = createUseStyles({
  register: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100svh",
  },
  registerContainer: {
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
    },
    "& .otherRegister": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .item": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: "5px",
        padding: "0.5rem",
        margin: "0.5rem",
        width: "150px",
        cursor: "pointer",
        "& img": {
          width: "30px",
          height: "30px",
          margin: "0 1rem",
        },
        "& p": {
          margin: "0 1rem",
        },
      },
    },
    "& .registerLink": {
      margin: "1rem 0",
      "& a": {
        color: "#C80028",
        textDecoration: "none",
        "& span": {
          fontWeight: "bold",
        },
      },
    },
  },
});

function Register() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const { user, setUser } = useContext<any>(UserContext)

 
  const emailLogin = (e:any) => {
    e.preventDefault();
    if(password === cPassword){
      createUserWithEmailAndPassword(auth, email, password);
      setTimeout(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            console.log(error.code, error.message);
          });
      }, 1000);

    }else{
      console.log("Check Your Passwords");
    }
      
  };
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log(result.user);
          setUser(result.user)
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {user ? (
        <Navigate to="/u/dashboard" />
      ) : (
        <motion.main
          className={classes.register}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ChatterLogo />
          <div className={classes.registerContainer}>
            <form>
              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button type="submit" onClick={emailLogin}>
                Register
              </button>
            </form>
            <div className="divider">
              <hr /> OR <hr />
            </div>
            <OtherLogin />
            <p className="registerLink">
              Already have an account?{" "}
              <Link to="/login">
                <span>Login</span>
              </Link>
            </p>
          </div>
        </motion.main>
      )}
    </>
  );
}

export default Register;
