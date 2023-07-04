/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { FeedItemContainer, Header } from "../components";
import { SearchContext } from "../context";
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
    margin: "0 auto",
    border: "1px solid #C80028",
    textAlign: "center",
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "fit-content",
    backgroundColor: "#FFEFEF",
    color: "#44000E",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    margin: "3rem 3rem",
    border: "1px solid #C80028",
  },
});


function SearchView() {
  const { search } = useContext<any>(SearchContext);
  const classes = useStyles();



  return (
    <>
      <Header />
      <div className="search max-margin">
        <h1 className={classes.search}>You searched: {search}</h1>
        <div className={classes.view}>
          <FeedItemContainer />
        </div>
      </div>
    </>
  );
}

export default SearchView;
