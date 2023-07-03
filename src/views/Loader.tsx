import { createUseStyles } from "react-jss";

// Define your styles using JSS
const useStyles = createUseStyles({
  fullPage: {
    width: "98svw",
    height: "98svh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heartbeat: {
    width: "100px",
    height: "100px",
    animation: "$heartbeat 1.5s ease-in-out infinite",
    position: "absolute",
    "& img": {
        position: "relative",
        top: "0",
        left: "0",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        boxShadow: "0 0 0 0 rgba(0,0,0,0.7)",
    },
  },
  "@keyframes heartbeat": {
    "0%": {
      transform: "scale(0.75)",
      filter: "saturate(0.5)"
    },
    "20%": {
      transform: "scale(1)",
        filter: "saturate(2)"
    },
    "40%": {
      transform: "scale(0.75)",
        filter: "saturate(0.5)"
    },
    "60%": {
      transform: "scale(1)",
        filter: "saturate(2)"
    },
    "80%": {
      transform: "scale(0.75)",
        filter: "saturate(0.5)"
    },
    "100%": {
      transform: "scale(0.75)",
        filter: "saturate(0.5)"
    },
  },
  loader: {
    display: "inline-block",
    width: "100px",
    height: "100px",
    border: "3px solid #FFEFEF",
    borderTopColor: "#C80028",
    borderRadius: "50%",
    animation: "$spin 1s ease-in-out infinite",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

// Loader component
const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.fullPage}>
      <div className={classes.loader} />
      <div className={classes.heartbeat}>
        <img src="/Chatter.svg" alt="alt" />
      </div>
    </div>
  );
};

export default Loader;
