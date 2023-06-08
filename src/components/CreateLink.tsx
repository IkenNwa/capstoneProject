/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { useState } from "react";

const usestyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEFEF",
    borderRadius: "5px",
    padding: "0.5rem 0",
    color: "#C80028",
    position: "absolute",
    bottom: "4rem",
    right: "3rem",
    "& input": {
      margin: "0 0.5rem",
      padding: "0.5rem",
      border: "none",
      outline: "none",
      backgroundColor: "#FFF",
      borderRadius: "5px",
      fontSize: "10px",
    },
    "& button": {
      margin: "0 0.5rem",
      padding: "0.5rem",
      border: "none",
      outline: "none",
      backgroundColor: "#C80028",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "10px",
      color: "#FFEFEF",
      "&:hover": {
        color: "#C80028",
        backgroundColor: "#FFEFEF",
      },
    },
  },
});
const CreateLink: React.FC = (props: {
  active: boolean;
  mark: string;
  setMark: any;
  setActive: any;
}) => {
  const [link, setLink] = useState("");
  const [alt, setAlt] = useState("");
  const classes = usestyles();
  if (props.active) {
    return (
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Link"
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alt-Text"
          onChange={(e) => setAlt(e.target.value)}
        />
        <button
          onClick={() => {
            props.setActive(false);
            props.setMark(props.mark + `\n[${alt}](${link})`);
          }}
        >
          Insert
        </button>
      </div>
    );
  }
  return;
};

export default CreateLink;
