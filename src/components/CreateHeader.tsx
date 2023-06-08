import { createUseStyles } from "react-jss";

const style = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEFEF",
    borderRadius: "5px",
    padding: "0.5rem 0",
    color: "#C80028",
    listStyle: "none",
    position: "absolute",
    bottom: "4rem",
    left: "0",
    "& li": {
      margin: "0 0.5rem",
      padding: "0.5rem",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "10px",
      "&:hover": {
        backgroundColor: "#C80028",
        color: "#FFEFEF",
      },
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateHeader = ({active, mark, setActive, setMark}:any) => {
  const classes = style();
  if (active) {
    return (
      <ul className={classes.header}>
        <li
          onClick={() => {
            setActive(false);
            setMark(mark + `\n# `);
          }}
        >
          Header 1
        </li>
        <li
          onClick={() => {
            setActive(false);
            setMark(mark + `\n## `);
          }}
        >
          Header 2
        </li>
        <li
          onClick={() => {
            setActive(false);
            setMark(mark + `\n### `);
          }}
        >
          Header 3
        </li>
        <li
          onClick={() => {
            setActive(false);
            setMark(mark + `\n#### `);
          }}
        >
          Header 4
        </li>
        <li
          onClick={() => {
            setActive(false);
            setMark(mark + `\n##### `);
          }}
        >
          Header 5
        </li>
        <li
          onClick={() => {
            setActive(false);
            setMark(mark + `\n###### `);
          }}
        >
          Header 6
        </li>
      </ul>
    );
  } else {
    return null;
  }
};

export default CreateHeader;
