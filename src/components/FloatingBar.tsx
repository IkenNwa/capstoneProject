import { RiImage2Fill, RiLinkM } from "react-icons/ri"
import { RxPlus } from "react-icons/rx"
import { createUseStyles } from "react-jss"

const styles = createUseStyles({
    floating: {
        position: "absolute",
        bottom: "0rem",
        right: "0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFEFEF",
        borderRadius: "5px",
        padding: "0.5rem",
        color: "#C80028",
        listStyle: "none",
        "& li": {
            margin: "0 0.5rem",
            padding: "0.5rem",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1.2em",
        },
    },  
})


function FloatingBar() {
    const classes = styles()
  return (
    <ul className={classes.floating}>
        <li><RxPlus /></li>
        <li><RiLinkM /></li>
        <li><RiImage2Fill /></li>
    </ul>
  )
}

export default FloatingBar