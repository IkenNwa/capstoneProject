/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { db } from "../config";
import { PostContext, UserContext } from "../context";

const useStyles = createUseStyles({
  review: {
    display: "flex",
    flexDirection: "column",
  },
  profile: {
    backgroundColor: "#C80028",
    color: "white",
    padding: "1em",
    width: "max-content",
    height: "fit-content",
    borderRadius: "5px",
  },
  comment: {
    display: "flex",
    width: "100%",
    height: "fit-content",
  },
  textarea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    height: "fit-content",
    "& textarea": {
      width: "100%",
      padding: "10px",
      marginInline: "10px",
    },
    "& button": {
      width: "100px",
      padding: "10px",
      marginInlineStart: "10px",
      marginBlockStart: "10px",
      backgroundColor: "#C80028",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  },
});

function Commenter() {
  const classes = useStyles();
  const { post, setPost } = useContext<any>(PostContext);
  const { user } = useContext<any>(UserContext);
  const [comment, setComment] = useState("");

  const handleComment = async (e: any) => {
    e.preventDefault();
    console.log(comment, user?.uid, post.comments.length);
    
    if (user && user?.uid && comment) {
      const newComment = {
        id: post.comments.length + 1,
        user: user?.displayName,
        comment: comment,
        pImg: user?.photoURL,
      };

      const updatedComments = [...post.comments, newComment];

      await updateDoc(doc(db, "posts", post.id), {
        comments: updatedComments,
      });
      setPost({ ...post, comments: updatedComments });
      setComment("");
    }
  };

  return (
    <div className={classes.review}>
      <form className={classes.comment}>
        <div className={classes.profile}>{user?.displayName.charAt(0)}</div>
        <div className={classes.textarea}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your Comment here!.."
          ></textarea>
          <button onClick={handleComment} className="btn" type="submit">
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Commenter;
