/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import Header from "../components/Header";
import { MdDeleteForever, MdSave } from "react-icons/md";
import { useContext, useState } from "react";
import { UserContext } from "../context";
import { deleteUser, updateEmail, updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router";
import { SEO } from "../components";
const styles = createUseStyles({
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    "& .pPhoto": {
      width: "250px",
      height: "250px",
      backgroundColor: "#C80028",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10rem",
      color: "#FFEFEF",
      marginBlock: "1.6rem",
      "& img": {
        width: "98%",
        height: "98%",
        borderRadius: "50%",
      },
    },
    "& h2": {
      fontSize: "2.5rem",
      marginBlock: "1.6rem",
    },
  },
  settings: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    "& .pForm": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      padding: "4rem",
      "& input": {
        padding: "8px",
      },
      "& .double": {
        gridColumn: "1/-1",
      },
    },
    "& .delete": {
      width: "100%",
      border: "1px solid #C80028",
      backgroundColor: "#FFEFEF",
      color: "#C80028",
      "&:hover":{
        backgroundColor: "#C80028",
        color: "#FFEFEF",
      }
    },
  },
});


function AccountSettings() {
  const classes = styles();
  const {user} = useContext<any>(UserContext)
  //States for all inputs
  const [fullName, setFullName] = useState(user?.displayName)
  const [email, setEmail] = useState(user?.email)
  const navigate = useNavigate()

  function updateUser(e: any) {
    e.preventDefault()
    updateProfile(user, {
      displayName: fullName,
    })
    updateEmail(user, email)
    alert("Profile Updated")
    navigate("/u/dashboard")

  }
  function deleteUsers() {
    deleteUser(user).then(() => {
      alert("User Deleted")
    }
    ).catch((error) => {
      console.log(error)
    }
    )
    //Refresh the page
    window.location.reload()

  }


  return (
    <>{user ? (<><Header />
      <div className="max-margin">
        <SEO title="Account Settings" />
        <div className={classes.profile}>
          <div className="pPhoto">
            {user?.photoURL ? (
              <img src={user?.photoURL} alt="" />
            ) : (
              user?.displayName?.charAt(0)
            )}
          </div>
          <h2>{user?.displayName}</h2>
          <p>Actor/Musician</p>
        </div>
        <div className={classes.settings}>
          <form className="pForm">
            <input
            className="double" 
            type="text" 
            name="FullName" 
            id="" 
            value={fullName} 
            placeholder="Full-Name"
            onChange={(e) => setFullName(e.target.value)}
            />
            <input 
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
              />
            <input type="text" name="" id="" placeholder="Occupation" />
            <textarea name="Bio" id="" placeholder="Bio" className="double"></textarea>
            <button 
            className="btn save"
            onClick={updateUser}
            ><MdSave /> Save</button>
          </form>
          <button 
          onClick={deleteUsers}
          className="btn delete"> <MdDeleteForever/>Delete Your Account</button>
        </div>
      </div></>): <Navigate to={"/login"} />}
    </>
  );
}

export default AccountSettings;
