import { useState } from "react";
import { RiCloseLine, RiDeleteBin2Line, RiSaveLine } from "react-icons/ri";
import { createUseStyles } from "react-jss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Header from "../components/Header";
import FloatingBar from "../components/FloatingBar";

const usestyles = createUseStyles({
  editor: {
    display: "flex",
    flexDirection: "row",
    height: "83svh",
    width: "100%",
    border: "none",
    overflow: "hidden",
    marginTop: "6.9rem",
  },
  textarea: {
    height: "100%",
    width: "50%",
    border: "none",
    outline: "none",
    padding: "1rem",
    borderRight: "1px solid black",
    fontSize: "1.2rem",
    resize: "none",
  },
  preview: {
    padding: "1rem",
    height: "100%",
    width: "50%",
    fontSize: "1.2rem",
    overflow: "scroll",
  },
  floating: {
    position: "absolute",
    bottom: "0rem",
    right: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C80028",
    borderRadius: "5px",
    padding: "0.5rem",
    margin: "0.5rem",
    "& button": {
      margin: "0 0.5rem",
      padding: "0.5rem",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      color: "#FFEFEF",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1.2em",
    },
  },
  "@media (max-width: 650px)":{
    editor: {
      flexDirection: "column",
      marginTop: "7rem",
    },
    textarea:{
      height: "50%",
      width: "100%"
    },
    preview: {
      height: "50%",
      width: "100%",
    },
    floating: {
      flexDirection: "column",
      justifyContent: "space-around",
      "& button": {
        margin: "0",
        padding: "0.5rem",
        border: "none",
        outline: "none",
        borderRadius: "5px",
        cursor: "pointer",
      },
    }

  }
});

function Editor() {
  const classes = usestyles();

  const [markdown, setMarkdown] = useState("### Preview here...");

  return (
    <div className={classes.editor}>
      <Header/>

      <>
        <textarea
          className={classes.textarea}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <div className={classes.floating}>
          <button><RiSaveLine /></button>
          <button><RiCloseLine /></button>
          <button><RiDeleteBin2Line /></button>
        </div>
        <FloatingBar />
      </>

      <div className={classes.preview}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Editor;
