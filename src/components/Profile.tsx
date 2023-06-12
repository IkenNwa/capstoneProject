import { signOut } from "firebase/auth";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { createUseStyles } from "react-jss"
import { useNavigate } from "react-router";
import { auth } from "../config";


const useStyles = createUseStyles({
    profile:{
        backgroundColor: "#C80028",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        fontSize: "25px",
        color: "white",
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
              backgroundColor: "#C80028",
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

    const handleLogout = () => {
        signOut(auth);
    }

  return (
    <div className="profile">
      <div className={classes.profile} onClick={() => setShow(!show)}>
        {show ? <RiCloseCircleLine /> : "AK"}
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
  );
}

export default Profile