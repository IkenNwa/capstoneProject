import { createUseStyles } from "react-jss";

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
    },
    "& .details": {
        paddingInline: "10px",
    },
  },
  user: {
    display: "flex",
    height: "fit-content",
  },
});
function UserBanner() {
  const classes = useStyles();
  return (
    <div className={classes.all}>
      <div className={classes.profile}>
        <div className="img"></div>
        <div className="details">
          <h4>Gbadamosi Yakub</h4>
          <p className="rank">Rank: Sage</p>
        </div>
      </div>
      <div className={classes.user}>
        <button className="btn">+Follow</button>
      </div>
    </div>
  );
}

export default UserBanner;
