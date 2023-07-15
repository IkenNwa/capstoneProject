import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, facebookProvider, provider } from "../config";
import { createUseStyles } from "react-jss";
import { useContext } from "react";
import { UserContext } from "../context";

const styles = createUseStyles({
  otherRegister: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    "& .item": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "150px",
      height: "40px",
      borderRadius: "5px",
      border: "transparent",
      outline: "none",
      padding: "0 2rem",
      margin: "0.5rem 0.5rem",
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: "light",
      cursor: "pointer",
      "& img": {
        width: "30px",
        height: "30px",
        marginRight: "0.5rem",
      },
      "& p": {
        fontSize: "1rem",
        fontWeight: "lighter",
      },
    },
  },
});

function OtherLogin() {
  const classes = styles();
  const {setUser} = useContext<any>(UserContext);
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const facebookLogin = () => {
    signInWithRedirect(auth, facebookProvider);
  };
  return (
    <div className={classes.otherRegister}>
      <div className="item" onClick={googleLogin}>
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google"
        />
        <p>Google</p>
      </div>
      <div className="item" onClick={facebookLogin}>
        <img
          src="https://img.icons8.com/color/48/000000/facebook-new.png"
          alt="Facebook"
        />
        <p>Facebook</p>
      </div>
    </div>
  );
}

export default OtherLogin;
