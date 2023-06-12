/* eslint-disable @typescript-eslint/no-explicit-any */
import { RiImage2Fill, RiLinkM } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import { createUseStyles } from "react-jss";
import { useState } from "react";
import CreateLink from "./CreateLink";
import CreateHeader from "./CreateHeader";
import AddImage from "./AddImage";

const styles = createUseStyles({
  floating: {
    position: "absolute",
    top: "64vh",
    right: "50vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEFEF",
    borderRadius: "5px",
    padding: "0.5rem",
    color: "#C80028",
    listStyle: "none",
    "& li": {
      margin: "0 0.5rem",
      padding: "0.5rem",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      borderRadius: "5px",
      cursor: "pointer",
    },
  },
  "@media (max-width: 650px)": {
    floating: {
      right: "2vw",
      top: "50vh",
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FloatingBar = ({mark, setMark}:any) => {
  const classes = styles();
  const [showHeader, setShowHeader] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showImage, setShowImage] = useState(false);
  return (
    <ul className={classes.floating}>
      <li
        onClick={() => {
          setShowHeader(!showHeader);
          setShowLink(false);
          setShowImage(false);
        }}
      >
        <RxPlus />
      </li>
      <li
        onClick={() => {
          setShowLink(!showLink);
          setShowHeader(false);
          setShowImage(false);
        }}
      >
        <RiLinkM />
      </li>
      <li
        onClick={() => {
          setShowImage(!showImage);
          setShowHeader(false);
          setShowLink(false);
        }}
      >
        <RiImage2Fill />
      </li>
      <CreateHeader
        active={showHeader}
        mark={mark}
        setActive={setShowHeader}
        setMark={setMark}
      />
      <AddImage
        active={showImage}
        mark={mark}
        setActive={setShowImage}
        setMark={setMark}
      />
      <CreateLink
        active={showLink}
        mark={mark}
        setActive={setShowLink}
        setMark={setMark}
      />
    </ul>
  );
};

export default FloatingBar;
