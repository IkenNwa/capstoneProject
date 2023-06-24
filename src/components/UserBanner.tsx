/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { PostContext } from "../context";
import { useContext } from "react";

const useStyles = createUseStyles({
  all: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "fit-content",
    padding: "2em",
  },
  profile: {
    display: "flex",
    "& .img": {
      width: "40px",
      height: "40px",
      backgroundColor: "#C80028",
      borderRadius: "50%",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .details": {
        paddingInline: "10px",
    },
  },
});
function UserBanner() {
  const classes = useStyles();
  const { post } = useContext<any>(PostContext);
  return (
    <div className={classes.all}>
      <div className={classes.profile}>
        <div className="img">
          <p>{post.author.charAt[0]}</p>
        </div>
        <div className="details">
          <h4>{post.author}</h4>
        </div>
      </div>
    </div>
  );
}

export default UserBanner;
