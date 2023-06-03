import { createUseStyles } from "react-jss"



const useStyles = createUseStyles({
    all: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        height: "fit-content",
        backgroundColor: "#fff",
        borderRadius: "0.5rem",
        padding: "0rem",
        margin: "1rem 0",
        "&:hover": {
            cursor: "pointer",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
        },
    },
    feedImage: {
        width: "100%",
        height: "250px",
        backgroundColor: "#c4c4c4",
        borderRadius: "0.5rem",
        overflow: "hidden",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },
    feedContent: {
        width: "100%",
        height: "fit-content",
        padding: "1rem",
        "& h1": {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#000",
        },
        "& p": {
            fontSize: "1rem",
            color: "#000",
        },
    },
    feedContentHeader: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#000",
    },
    feedContentOverview: {
        fontSize: "1rem",
        color: "#000",
    },
});

function FeedItem() {
    const classes = useStyles();
  return (
    <div className={classes.all}>
        <div className={classes.feedImage}>
            <img src="/guitar.jpg" alt="feedImage" />
            </div>
            <div className={classes.feedContent}>
            <h1 className={classes.feedContentHeader}>Picking the Best Guitar</h1>
            <p className={classes.feedContentOverview}>
                A lions guide to buying great sounding guitars
            </p>
            </div>
    </div>
  )
}

export default FeedItem