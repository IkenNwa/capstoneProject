/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
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
  const [count, setCount] = useState(post.likes?.length || 0);

  // Update Post.likes in firebase
  const updateLikes = async () => {
    const postRef = doc(db, "posts", post.id);
    const updatedLikes = Array.isArray(post.likes) ? [...post.likes] : [];
    if (!heart) {
      updatedLikes.push(user?.uid);
      await updateDoc(postRef, { likes: updatedLikes });
      setCount(count + 1);
    } else {
      const index = updatedLikes.indexOf(user?.uid);
      if (index !== -1) {
        updatedLikes.splice(index, 1);
        await updateDoc(postRef, { likes: updatedLikes });
        setCount(count - 1);
      }
    }
  };
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this post on RxReview",
          text: post.title,
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("Web Share API not supported in your browser");
    }
  };

  // Check if user has liked post
  useEffect(() => {
    if (user && post.likes && post.likes.includes(user.uid)) {
      setHeart(true);
      setCount(post.likes.length);
    }
  }, [post, user]);

  return (
    <>
      {user ? (
        <ul className={classes.interactions}>
          <li
            onClick={() => {
              setHeart(!heart);
              updateLikes();
            }}
          >
            {heart ? <RxHeartFilled /> : <RxHeart />}
            {count}
          </li>
          <li
          onClick={handleShare}
          >
            <RxShare2 />
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

export default Interactions;
