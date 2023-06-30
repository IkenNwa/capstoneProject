/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "3em",
    fontWeight: "bold",
    color: "#C80028",
    fontFamily: "sans-serif",
    textShadow: "0px 0px 10px #FFEFEF",
  },
});

export default function Features() {
  const classes = styles();
  const text = [
    "Simple Interface",
    "Easy to use!",
    "Alternate Image",
    "Markdown Editor",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeText, setActiveText] = useState(text[currentIndex]);

    //Change text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === text.length - 1 ? 0 : currentIndex + 1
      );
    }, 2000);
    setActiveText(text[currentIndex]);
    return () => clearInterval(interval);
  }, [currentIndex]);
  



  return (
    <div>
      <motion.div
      initial={{left: "0px",}}
      animate={{left: "200px",}}
      transition={{duration: "2s", delay:2}}
      className={classes.container}
      
      >{activeText}</motion.div>
    </div>
  );
}
