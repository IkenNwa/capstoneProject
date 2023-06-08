import { RiImage2Fill, RiLinkM } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import { createUseStyles } from "react-jss";
import { useState } from "react";
import CreateLink from "./CreateLink";
import CreateHeader from "./CreateHeader";
import AddImage from "./AddImage";

const styles = createUseStyles({
  floating: {
    position: "fixed",
    top: "50vh",
    right: "0",
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
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FloatingBar: React.FC = (props: {
  mark: string;
  setMark: any;
}): JSX.Element => {
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
        mark={props.mark}
        setActive={setShowHeader}
        setMark={props.setMark}
      />
      <AddImage
        active={showImage}
        mark={props.mark}
        setActive={setShowImage}
        setMark={props.setMark}
      />
      <CreateLink
        active={showLink}
        mark={props.mark}
        setActive={setShowLink}
        setMark={props.setMark}
      />
    </ul>
  );
};

export default FloatingBar;
