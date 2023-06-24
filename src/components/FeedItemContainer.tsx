/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import FeedItem from "./FeedItem";
import { useContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config";
import { FeedContext } from "../context";

const useStyles = createUseStyles({
  all: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "fit-content",
    width: "100%",
    padding: "2rem",
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
  // Fetch all posts from database
  const { feed } = useContext<any>(FeedContext);

  return (
    <div className={classes.all}>
      {feed.map(
        (post: {
          id: any;
          title: string;
          overview: string;
          image: string;
          content: string;
          author: string;
          likes: Array<string>;
          comments: any;
        }) => (
          <FeedItem
            id={post.id}
            title={post.title}
            overview={post.overview}
            image={post.image}
            content={post.content}
            author={post.author}
            likes={post.likes}
            key={post.id}
            comments={post.comments}
          />
        )
      )}
    </div>
  );
}

export default FeedItemContainer;
