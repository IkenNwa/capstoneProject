import { RxHeart, RxShare2 } from "react-icons/rx";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  interactions: {
    display: "flex",
    listStyle: "none",
    padding: "1em",
    "& li": {
      color: "#C80028",
      paddingInline: "5px",
    },
  },
});

function Interactions() {
    const classes = useStyles()
  return (
    <ul className={classes.interactions}>
      <li><RxHeart /></li>
      <li><RxShare2 /></li>
    </ul>
  );
}

export default Interactions;
