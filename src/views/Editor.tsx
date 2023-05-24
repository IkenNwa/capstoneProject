import { useState } from "react";
import { createUseStyles } from "react-jss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const usestyles = createUseStyles({
  editor: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
    border: "1px solid black",
  },
  textarea: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "1rem",
    borderRight: "1px solid black",
    fontSize: "1.2rem",
  },
  preview: {
    flex: 1,
    padding: "1rem",
    fontSize: "1.2rem",
    overflow: "scroll",
  },
  floating: {
    position: "absolute",
    bottom: "0rem",
    left: "70vw",
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
      borderRadius: "5px",
      cursor: "pointer",
    },
  },
});

function Editor() {
  const classes = usestyles();

  const [markdown, setMarkdown] = useState("# Preview here...");

  return (
    <div className={classes.editor}>
      <>
        <textarea
          className={classes.textarea}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <div className={classes.floating}>
          <button className="btn">Save</button>
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </>

      <div className={classes.preview}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Editor;
