import { motion } from "framer-motion";
import { createUseStyles } from "react-jss";
import {
  SEO,
  ChatterLogo,
  Profile,
  Features,
  FeedItemContainer,
} from "../components";
import TypeWriter from "../components/TypeWriter";

const styles = createUseStyles({
  sect: {
    display: "flex",
    flexDirection: "column",
    height: "90svh",
    alignItems: "center",
    width: "100%",
  },
  about: {
    background: "linear-gradient(210deg, #C80028, #ff3c01)",
    color: "#FFEFEF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "40px",
    borderRadius: "50px",
    padding: "2rem",
    height: "fit-content",
    alignItems: "center",
    width: "fit-content",
    fontSize: "1.2rem",
    "@media (min-width: 768px)": {
      margin: "3rem",
      width: "50%",
      height: "fit-content",
      padding: "3rem",
      fontSize: "1.5rem",
    },
    "& h3": {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBlockEnd: "1rem",
    },
    "& article": {
      fontSize: "1rem",
      textAlign: "center",
      lineHeight: "2rem",
    },
  },
  navi: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  hero: {
    height: "90%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& .all": {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      lineHeight: "4rem",
      alignItems: "center",
      height: "100%",
      width: "inherit",
      backdropFilter: "blur(15px)",
      "& h1": {
        fontSize: "4rem",
        padding: "10px",
        textAlign: "center",
      },
    },
  },
});

function Landing() {
  const classes = styles();
  return (
    <motion.main
      className="disp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <SEO title="Welcome to Chatter" />
      <section className={classes.sect}>
        <div className={classes.navi}>
          <ChatterLogo />
          <Profile />
        </div>
        <div className={classes.hero}>
          <div className="all">
            <h1># Welcome to Chatter</h1>
            <TypeWriter />
          </div>
        </div>
      </section>
      <section className={classes.about}>
        <h3>About Chatter</h3>
        <article>
          Chatter is more than just an app—it's a vibrant community that
          nurtures the love for writing and reading. Whether you're a passionate
          writer seeking an audience or an avid reader in search of captivating
          stories, Chatter provides a platform where creativity flourishes,
          connections are made, and inspiration thrives. Join Chatter today and
          embark on a journey where words have the power to inspire and unite.
        </article>
      </section>
      <section className={classes.sect}>
        <h1>Features</h1>
        <Features />
      </section>
      <section className={classes.sect}>
        <h2>Latest</h2>
        <FeedItemContainer />
      </section>
    </motion.main>
  );
}

export default Landing;
