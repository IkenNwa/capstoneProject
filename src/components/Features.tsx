/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import {motion} from "framer-motion";

const styles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "3em",
    fontWeight: "bold",
    color: "#C80028",
    "& p": {
      textAlign: "center",
      width: "100%",
      backgroundColor: "#FFEFEF",
      color: "#44000E",
      padding: "1rem",
      borderRadius: "0.5rem",
      margin: "0 auto",
    },
    "@media (min-width: 768px)": {
      fontSize: "5em",
    },
    "& img": {
      width: "100%",
      height: "80%",
      objectFit: "cover",
      position: "absolute",
      zIndex: -1,
      filter: "blur(10px)",
    },
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
  const image = [
    "/Chatter.png",
    "https://image1.masterfile.com/getImage/NjExOC0wNzM1MTU3M2VuLjAwMDAwMDAw=AE2bkM/6118-07351573en_Masterfile.jpg",
    "https://www.thoughtco.com/thmb/F66o7Tq0Yk7HG8O3G7m_4VcNDng=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Getty_alternate_and_alternative-98856095-56af90de5f9b58b7d01a9d58.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/2560px-Markdown-mark.svg.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeText, setActiveText] = useState(text[currentIndex]);
  const [activeImage, setActiveImage] = useState<any>(image[currentIndex]);

    //Change text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(null)
      setCurrentIndex((currentIndex) =>
        currentIndex === text.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    setActiveText(text[currentIndex]);
    setActiveImage(image[currentIndex]);
    return () => clearInterval(interval);
  }, [currentIndex]);

  



  return (
    <div className={classes.container}>
      {activeImage ? (
        <motion.img
        src={activeImage}
        alt="alternate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      ) : (null)}
        
      <p>{activeText}</p>
    </div>
  );
}
