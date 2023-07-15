/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { UserContext } from "../context";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    all: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "fit-content",
    },
    addEmail: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        height: "fit-content",
        backgroundColor: "#FFEFEF",
        color: "#44000E",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        margin: "0 auto",
        border: "1px solid #C80028",
        textAlign: "center",
    },
});


function VerifyEmail() {
    const classes = useStyles();
  const { user } = useContext<any>(UserContext);
  return (
    <div className={classes.all}>
      <div className={classes.addEmail}>
        {user?.email ? (
          <>
            <h3>Verify Your Email</h3>
            <p>Check your email for a verification link</p>
          </>
        ) : (
          <>
            <h3>Add Your Email</h3>
            <input type="email" />
            <button>Send Verification</button>
          </>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
