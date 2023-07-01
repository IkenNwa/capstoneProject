/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { PostContext } from "../context";
import SMInteractions from "./SmallInteractions";

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
    borderRadius: "0.5rem 0.5rem 0 0",
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

function FeedItem({
  title,
  overview,
  image,
  content,
  author,
  comments,
  likes,
  id,
}: any) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { setPost } = useContext<any>(PostContext);
  return (
    <div
      key={id}
      className={classes.all}
      onClick={() => {
        setPost({ title, content, author, comments, likes, id });
        //scroll to top
        window.scrollTo(0, 0);
        navigate(`/post/${title}`);
      }}
    >
      <div className={classes.feedImage}>
        <img src={image ? image : "/Chatter.png"} alt="feedImage" />
      </div>
      <div className={classes.feedContent}>
        <h1 className={classes.feedContentHeader}>{title}</h1>
        <div className={classes.feedContentOverview}>{overview}</div>
      </div>
      <SMInteractions likes={likes} comments={comments} />
    </div>
  );
}

export default FeedItem;
