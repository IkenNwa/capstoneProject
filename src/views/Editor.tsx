/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { RiCloseLine, RiDeleteBin2Line } from "react-icons/ri";
import { createUseStyles } from "react-jss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MdPublish } from "react-icons/md";
import { useNavigate } from "react-router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { SEO, Header, FloatingBar } from "../components";

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
  inp: {
    border: "none",
    fontSize: "1.2rem",
    outline: "none",
    paddingBlock: "1.5rem",
  },
  textarea: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    border: "none",
    padding: "1rem",
    borderRight: "1px solid black",
    "& textarea": {
      border: "none",
      outline: "none",
      fontSize: "1.2rem",
      resize: "none",
      lineHeight: "2rem",
      height: "95%",
    },
  },
  preview: {
    padding: "1rem",
    height: "100%",
    width: "50%",
    fontSize: "1.2rem",
    overflow: "scroll",
    lineHeight: "2.6rem",
    "& img": {
      maxWidth: "100%",
      borderRadius: "10px",
      marginBlock: "2rem",
    },
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
      "&:hover":{
        backgroundColor: "#FFEFEF",
        color: "#C80028",
      }
    },
  },
  "@media (max-width: 650px)": {
    editor: {
      flexDirection: "column",
      marginTop: "7rem",
    },
    textarea: {
      height: "50%",
      width: "100%",
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
    },
  },
});

function Editor() {
  const classes = usestyles();

  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");
  const postRef = collection(db, "posts");
  const navigate = useNavigate();

  const handlePublish = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (markdown === "") return alert("Please Write Something to Publish");
    await addDoc(postRef, {
      title,
      content: markdown,
      overview: `${markdown.slice(0, 100)} + "..."}`,
      createdAt: serverTimestamp(),
      uid: auth.currentUser?.uid,
      author: auth.currentUser?.displayName,
      image: imgLink,
      likes: [],
      comments: [],
    });
      setMarkdown("");
      setTitle("");
      localStorage.removeItem("markdown");
      localStorage.removeItem("title");
      navigate("/u/completed");
    
  };
  const handleSave = (e:any) => {
    e.preventDefault();
    if (markdown === "") return alert("Please Write Something to Save");
    localStorage.setItem("markdown", markdown);
    localStorage.setItem("imgLink", imgLink);
    localStorage.setItem("title", title);
    navigate("/u/dashboard");
  }
  const handleDelete = (e:any) => {
    e.preventDefault();
    localStorage.removeItem("markdown");
    localStorage.removeItem("title");
    localStorage.removeItem("imgLink");
    setMarkdown("");
    setTitle("");
    setImgLink("");
  }
  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdown");
    const savedImgLink = localStorage.getItem("imgLink");
    const savedTitle = localStorage.getItem("title");
    if (savedMarkdown) setMarkdown(savedMarkdown);
    if (savedTitle) setTitle(savedTitle);
    if (savedImgLink) setImgLink(savedImgLink);
  }, []);

  return (
    <div className={classes.editor}>
      <SEO title="Editor" />
      <Header />

      <form className={classes.textarea}>
        <input
          type="text"
          className={classes.inp}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What do you want to call this Project.."
          autoFocus
          required
        />
        <input
          type="text"
          placeholder="Enter Cover Image Link"
          className={classes.inp}
          value={imgLink}
          onChange={(e) => setImgLink(e.target.value)}
          name="cover"
          id=""
        />
        <textarea
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
          placeholder="Start Typing Here..."
          required
        ></textarea>
        <div className={classes.floating}>
          <button title="Publish" onClick={handlePublish}>
            <MdPublish />
          </button>
          <button onClick={handleSave} title="Save and close">
            <RiCloseLine />
          </button>
          <button onClick={handleDelete} title="Delete Entirely">
            <RiDeleteBin2Line />
          </button>
        </div>
        <FloatingBar mark={markdown} setMark={setMarkdown} className="bar" />
      </form>

      <div className={classes.preview}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        >
          {markdown ? markdown : "### Preview Here..."}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Editor;


