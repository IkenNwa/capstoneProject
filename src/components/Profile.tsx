/* eslint-disable @typescript-eslint/no-explicit-any */
import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { createUseStyles } from "react-jss"
import { useNavigate } from "react-router";
import { auth } from "../config";
import { UserContext } from "../context";


const useStyles = createUseStyles({
    profile:{
      background: "linear-gradient(210deg, #C80028, #ff3c01)",
      color: "#FFEFEF",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        fontSize: "25px",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    },
    pop:{
        backgroundColor: "#FFEFEF",
        position: "absolute",
        width: "150px",
        zIndex: "999",
        right:"2%",
        top: "65px",
        listStyle: "none",
        padding:"4px",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px #878787",
        "& li":{
            padding: "8px",
            cursor: "pointer",
            "&:hover":{
              background: "linear-gradient(210deg, #C80028, #ff3c01)",
              borderRadius: "3px",
              color: "#FFEFEF",
            }
        },
    }
})


function Profile() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    // User Context
    const { user } = useContext<any>(UserContext);
      


    const handleLogout = () => {
        signOut(auth);
        navigate("/login");
    }

  return (
    <>{user ? (
      <div className="profile">
      <div className={classes.profile} onClick={() => setShow(!show)}>
        {show ? <RiCloseCircleLine /> : user?.displayName[0]}
      </div>
      {show ? (
        <>
          <ul className={classes.pop}>
            <li onClick={() => navigate("/u/dashboard")}>Home</li>
            <li onClick={() => navigate("/u/settings")}>Account</li>
            <li onClick={handleLogout}>Log-Out</li>
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
    ): (
      <button 
      className="btn"
      onClick={() => navigate("/login")}
      >Login</button>
    )}
    </>
  );
}

export default Profile