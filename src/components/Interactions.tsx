/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { RxHeart, RxHeartFilled, RxShare2 } from "react-icons/rx";
import { createUseStyles } from "react-jss";
import { PostContext, UserContext } from "../context";
import { db } from "../config";
import { doc, updateDoc } from "firebase/firestore";

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
  const classes = useStyles();
  const { user } = useContext<any>(UserContext);
  const { post } = useContext<any>(PostContext);

  const [heart, setHeart] = useState(false);
  const [count, setCount] = useState(0);

  //Check if user has liked post
  //Update Post.likes in firebase
  const updateLikes = async () => {
    const postRef = doc(db, "posts", post.id);
    if (heart) {
      await updateDoc(postRef, {
        likes: [...post.likes, user?.uid],
      });
      setCount(count + 1);
    }
    if (!heart) {
      await updateDoc(postRef, {
        likes: post.likes.filter((like: any) => like !== user?.uid),
      });
      setCount(count - 1);
    }
  };

  return (
    <>{user ? (
      <ul className={classes.interactions}>
      <li
        onClick={() => {
          setHeart(!heart);
          updateLikes();
        }}  
      >
        {heart ? (
          <RxHeartFilled />
        ) : (
          <RxHeart />
        )}
        {count}
      </li>
      <li>
        <RxShare2 />
      </li>
    </ul>) : (
      <></>
      )}
    </>
  );
}

export default Interactions;
