/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router";
import { NotVerifiedPopUp } from ".";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";

const styles = createUseStyles({
  all: {
    backgroundColor: "#FFEFEF",
    display: "flex",
    flexDirection: "column",
    height: "12em",
    width: "100%",
    boxShadow: "0px 5px 10px #a6a6a6ea",
  },
  space: {
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    width: "100%",
    height: "28%",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
    "& div": {
      textAlign: "center",
      width: "50%",
      cursor: "pointer",
    },
  },
  floatingLine: {
    backgroundColor: "#C80028",
    position: "relative",
    height: "2%",
    zIndex: "1",
    width: "50%",
  },
});


function MiniNav() {
  const classes = styles();
  const navigate = useNavigate();
  const {user} = useContext<any>(UserContext)
  const [isVerified, setIsVerified] = useState<boolean>(false);
  
  useEffect(() => {
    if(user) {
      setIsVerified(user.emailVerified)
    }
  }, [user])
  

  

  return (
    <div className={classes.all}>
      <div className={classes.space}>{isVerified ? null : <NotVerifiedPopUp />}
      </div>
      <div className={classes.nav}>
        <div
          onClick={() => {
            navigate("/u/dashboard");
          }}
        >
          Home
        </div>

        <div
          onClick={() => {
            navigate("myarticles");
          }}
        >
          My Articles
        </div>
      </div>
    </div>
  );
}

export default MiniNav;
