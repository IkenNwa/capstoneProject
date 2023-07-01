/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { RxChatBubble, RxHeart, RxShare2 } from "react-icons/rx";
import { createUseStyles } from "react-jss";
import { UserContext } from "../context";

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

function SMInteractions({ likes, comments, shares }: any) {
  const classes = useStyles();
  const { user } = useContext<any>(UserContext);

  return (
    <>
      {user ? (
        <ul className={classes.interactions}>
          <li>
            <RxHeart />
            {likes && likes.length}
          </li>
          <li>
            <RxShare2 />
            {shares && shares.length}
          </li>
          <li>
            <RxChatBubble />
            {comments && comments.length}
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

export default SMInteractions;
