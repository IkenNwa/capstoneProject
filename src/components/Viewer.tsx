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
import BackBtn from "./BackBtn";

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
      width: "80svw",
      height: "auto",
      borderRadius: "0.5rem",
      margin: "1rem 0",
      objectFit: "cover",
    },
    "& h1": {
      fontSize: "3rem",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    "& h2": {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    "& h3": {
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    "& h4": {
      fontSize: "1.25rem",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    "& h5": {
      fontSize: "1rem",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    "& h6": {
      fontSize: "0.75rem",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    "& p": {
      fontSize: "1rem",
      margin: "1rem 0",
    },
    "& ul": {
      fontSize: "1rem",
      margin: "1rem 0",
    },
    "& ol": {
      fontSize: "1rem",
      margin: "1rem 0",
    },
    "& li": {
      fontSize: "1rem",
      margin: "1rem 0",
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
      <SEO title={post.title} description={post.content} />
      <div className={classes.article}>
        <BackBtn />
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
