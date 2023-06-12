import { createUseStyles } from "react-jss";
import Header from "../components/Header";
import { MdDeleteForever, MdSave } from "react-icons/md";
import { auth } from "../config";

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


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AccountSettings(user: any) {
  const classes = styles();
const u = user.user;
  return (
    <>
    <Header />
      <div className="max-margin">
        <div className={classes.profile}>
          <div className="pPhoto">
            {user?.photoURL ? (
              <img src={u?.photoURL} alt="" />
            ) : (
              u?.displayName?.charAt(0)
            )}
          </div>
          <h2>{u?.displayName}</h2>
          <p>Actor/Musician</p>
        </div>
        <div className={classes.settings}>
          <form className="pForm">
            <input type="text" name="FirstName" id="" value={u?.displayName}  placeholder="FirstName" />
            <input type="text" name="LastName" id="" placeholder="LastName" />
            <input type="number" name="Age" id="" placeholder="Age" />
            <input type="text" name="" id="" placeholder="Occupation" />
            <textarea name="Bio" id="" placeholder="Bio" className="double"></textarea>
            <button className="btn save"><MdSave /> Save</button>
          </form>
          <button className="btn delete"> <MdDeleteForever/>Delete Your Account</button>
        </div>
      </div>
    </>
  );
}

export default AccountSettings;
