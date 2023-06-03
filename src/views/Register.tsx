// Date: 9/4/2021
// Note: React Router v6

import { Link } from "react-router-dom";
import ChatterLogo from "../components/ChatterLogo";
import { createUseStyles } from "react-jss";
import { motion } from "framer-motion";
import GLogo from "../assets/google.svg";
import FLogo from "../assets/facebook.svg";
import {
  auth,
  getRedirectResult,
  provider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "../config";
import { useEffect, useState } from "react";

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

  const googleLogin = () => {
    console.log("Google Login");
    signInWithRedirect(auth, provider);
  };
  const facebookLogin = () => {
    console.log("Facebook Login");
    signInWithRedirect(auth, provider);
  };
  const emailLogin = (email:string, password:string) => {
    console.log("Email Login");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  //Get Redirect Result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log(result.user);
        } else {
          //...
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
           />
          <input type="password" placeholder="Confirm Password" 
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button type="submit"
          onClick={() => emailLogin(email, password)}
          >Register</button>
        </form>
        <div className="divider">
          <hr /> OR <hr />
        </div>
        <div className="otherRegister">
          <div className="item" onClick={googleLogin}>
            <img src={GLogo} alt="Google" />
            <p>Google</p>
          </div>
          <div className="item" onClick={facebookLogin}>
            <img src={FLogo} alt="Facebook" />
            <p>Facebook</p>
          </div>
        </div>
        <p className="registerLink">
          Already have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </motion.main>
  );
}

export default Register;
