/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { FeedItemContainer, Header, SEO } from "../components";
import { SearchContext } from "../context";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  all: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",

  },
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
    margin: "3rem 2rem",
    border: "1px solid #C80028",
  },
});


function SearchView() {
  const { search, searchError } = useContext<any>(SearchContext);
  const classes = useStyles();
  



  return (
    <>
    <SEO title={`Search results for ${search}`} description="Search for articles" />
      <Header />
      <div className={`search max-margin ${classes.all}`}>
        <h1 className={classes.search}>You searched: {search}</h1>
        <div className={classes.view}>
          {searchError ? (
            <h1>{searchError}!</h1>
          ) : (
            <FeedItemContainer />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchView;
