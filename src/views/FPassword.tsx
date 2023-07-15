import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { auth } from "../config";
import { useNavigate } from "react-router";

const styles = createUseStyles({
  all: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100svh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    height: "fit-content",
    padding: "2rem",
    border: "1px solid #C80028",
    borderRadius: "0.5rem",
    boxShadow: "0 3px 7px 0 rgba(0,0,0,0.5)",
    backgroundColor: "#FFEFEF",
    "& h1": {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBlockEnd: "1rem",
    },
    "& input": {
      padding: "8px",
      margin: "0.5rem",
      border: "1px solid #C80028",
      borderRadius: "0.5rem",
      outline: "none",
    },
    "& button": {
      padding: "8px",
      margin: "0.5rem",
      border: "none",
      borderRadius: "0.5rem",
      backgroundColor: "#C80028",
      color: "#fff",
      cursor: "pointer",
    },
  },
});

function FPassword() {
  const classes = styles();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "") {
      alert("Please enter your email");
      return;
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("We have sent you an email to reset your password!");
          navigate("/login");
        })
        .catch(() => {
          alert("Failed to send email");
        });
    }
  };

  return (
    <div className={classes.all}>
      <form className={classes.container}>
        <h1>Forgot Password</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn" onClick={handleSubmit}>
          Send Email
        </button>
      </form>
    </div>
  );
}

export default FPassword;
