/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import UserBanner from "./UserBanner";
import CreditsBanner from "./CreditsBanner";
import Interactions from "./Interactions";
import { PostContext } from "../context";
import { useContext } from "react";
import { createUseStyles } from "react-jss";
import Comments from "./Comments";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import SEO from "./SEO";

const useStyles = createUseStyles({
  article: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    borderRadius: "0.5rem",
    padding: "0rem",
    margin: "1rem 0",
    "& img": {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },
  },
  maxMargin: {
    margin: "9rem 0",
  },
});

function Viewer() {
  const { post } = useContext<any>(PostContext);
  const classes = useStyles();
  return (
    <div className={classes.maxMargin + " article"}>
      <SEO title={post.title + " ::Chatter"} description={post.content} />
      <div className={classes.article}>
        <UserBanner />
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <Interactions />
      <Comments />
      <CreditsBanner />
    </div>
  );
}

export default Viewer;
