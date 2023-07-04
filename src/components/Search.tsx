/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, } from "react";
import { RiSearchLine } from "react-icons/ri";
import { createUseStyles } from "react-jss";
import { FeedContext, SearchContext } from "../context";
import { useNavigate } from "react-router";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config";

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
  const { search, setSearch } = useContext<any>(SearchContext);
  const { setFeed } = useContext<any>(FeedContext);
  const navigate = useNavigate();

  const handleSearch = () => {

        const q = collection(db, "posts");
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const posts: any = [];
          querySnapshot.forEach((doc) => {
            if (
              doc.data().title.toLowerCase().includes(search.toLowerCase()) ||
              doc.data().author.toLowerCase().includes(search.toLowerCase())
            ) {
              posts.push({ ...doc.data(), id: doc.id });
            }
            setFeed(posts.reverse());
          });
        });
  
          unsubscribe();
          navigate(`/search/${search}`);
      }
  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder="Search by Article Title, or Author"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <RiSearchLine onClick={handleSearch} />
    </div>
  );
}

export default Search;
