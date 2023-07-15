/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  text: {
    fontSize: "2rem",
    fontWeight: "lighter",
    marginBlockEnd: "1rem",
    textAlign: "center",
    lineHeight: "2rem",
    padding: "1rem",
    "@media (min-width: 768px)": {
      fontSize: "3rem",
    },
  },
  bold: {
    color: "#FFF",
    fontWeight: "bold",
    background: "linear-gradient(210deg, #C80028, #ff3c01)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    
  },
});


function TypeWriter() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const txtArray = [
    "Amplify Your Voice",
    "Share Your Thoughts",
    "Collaborate With Others",
    "Connect With Others",
    "Build Your Network",
  ];
//   const txt = txtArray[loopNum];
  // const isComplete = text === txt

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % txtArray.length;
      const fullTxt = txtArray[current];

      setText(
        isDeleting
          ? fullTxt.substring(0, text.length - 1)
          : fullTxt.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, txtArray]);

  return <div className={classes.text}>Spark Your Ideas, <b className={classes.bold}>{text}</b></div>;
}

export default TypeWriter;
