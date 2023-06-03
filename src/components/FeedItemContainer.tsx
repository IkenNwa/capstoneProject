import { createUseStyles } from "react-jss";
import FeedItem from "./FeedItem"

const useStyles = createUseStyles({
    all: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "fit-content",
        width: "100%",
        padding: "4rem",
    },
    "@media (min-width: 490px)": {
        all: {
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "1rem",

        },
    },
    "@media (min-width: 1024px)": {
        all: {
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "1rem",
        },
    },
});
function FeedItemContainer() {
    const classes = useStyles();
  return (
    <div className={classes.all }>
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
    </div>
  )
}

export default FeedItemContainer