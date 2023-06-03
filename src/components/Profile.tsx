import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { createUseStyles } from "react-jss"


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
        backgroundColor: "white",
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
            marginBlockEnd: "10px",
            padding: "8px",
        }
    }
})


function Profile() {
    const classes = useStyles();
    const [show, setShow] = useState(false)

  return (
    <div className="profile">
      <div className={classes.profile} onClick={() => setShow(!show)}>
        {show ? (<RiCloseCircleLine />) : "AK"}
      </div>
      {show ? (
        <>
          <ul className={classes.pop}>
            <li>Home</li>
            <hr />
            <li>Dashboard</li>
            <hr />
            <li>Account</li>
            <hr />
            <li>Log-Out</li>
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Profile