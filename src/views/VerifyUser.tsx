/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useNavigate } from "react-router";
import { UserContext } from "../context"
import { useContext, useState } from "react"
import { updateProfile } from "firebase/auth";
import { createUseStyles } from "react-jss";
import { SEO, ChatterLogo } from "../components";

const styles = createUseStyles({
    all:{
        display:"flex",
        flexDirection: "column",
        height: "100svh",
        alignItems: "center",
        justifyContent: "center",
    },
    create:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFEFEF",
        padding: "20px",
        width: "250px",
        border: "1px solid #C80028",
        borderRadius: "10px",
        "& input":{
            padding: "8px",
            margin: "10px 0",
            outline: "none",
            border: "1px solid #C80028",
            borderRadius: "8px",

        }
    }
})


export default function VerifyUser() {
    const classes = styles()
    const { user } = useContext<any>(UserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    function createProfile(e:any) {
        e.preventDefault();
        updateProfile(user, {
            displayName: firstName + " " + lastName,
        }).then(() => {
            navigate("/u/dashboard")
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className={classes.all}>
        <SEO title="Create Profile" />
        <ChatterLogo />
        {user ? (
            <div className={classes.create}>
                <h4>Update Profile</h4>
                <input 
                type="text" 
                placeholder="First-Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Last-Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                 />
                <button 
                className="btn"
                onClick={createProfile}
                >Save</button>
            </div>
         ) : (
        <Navigate to="/login" />
            )}
    </div>
  )
}