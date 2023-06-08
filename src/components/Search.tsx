import { RiSearchLine } from "react-icons/ri";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: "fit-content",
    backgroundColor: "#FFEFEF",
    color: "#44000E",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    "& input": {
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      fontWeight: "lighter",
      color: "#44000E",
      backgroundColor: "transparent",
      padding: "0 1rem",
      "&::placeholder": {
        color: "#44000E",
        opacity: 0.5,
      },
    },
    "& svg": {
      color: "#44000E",
      cursor: "pointer",
    },
  },
});

function Search() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Search by Article, Author, or Tags" />
      <RiSearchLine />
    </div>
  );
}

export default Search;
