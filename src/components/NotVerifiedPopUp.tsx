import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    popup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
        height: "fit-content",
        backgroundColor: "#FFEFEF",
        color: "#44000E",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        margin: "0 auto",
        border: "1px solid #C80028",
        "& h5": {
            color: "#C80028",
            fontSize: "12px",
            fontWeight: "bold",
        },
    },
})

function NotVerifiedPopUp() {
    const classes = useStyles()
  return (
    <div className={classes.popup}>
        <h5>Pending Action</h5>
        <p>Please verify your email address!</p>
    </div>
  )
}

export default NotVerifiedPopUp