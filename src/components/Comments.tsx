/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { PostContext } from "../context";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  all: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "fit-content",
    padding: "10px",
    margin: "10px",
    border: "1px solid #C80028",
    borderRadius: "5px",
    backgroundColor: "#FFEFEF",
    "& img": {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginInlineEnd: "10px",
    },
    "& .profile": {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginInlineEnd: "10px",
      backgroundColor: "#C80028",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});


function Comments() {
  const classes = useStyles();
  const { post } = useContext<any>(PostContext);

  return (
    <div>
      {post && post.comments && post.comments.length > 0 ? (
        <div>
          {post.comments.map((comment: any) => (
            <div key={comment.id} className={classes.all}>
              <div>
                {comment.pImg ? (
                  <img src={comment.pImg} alt="profile" />
                ) : (
                  <div className="profile">{comment.user.charAt(0)}</div>
                )}
              </div>
              <div>
                <div>{comment.user}</div>
                <div>{comment.comment}</div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No comments yet</div>
      )}
    </div>
  );
}

export default Comments;
