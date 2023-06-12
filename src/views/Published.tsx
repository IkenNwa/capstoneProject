import { RiShareForward2Fill } from "react-icons/ri"
import Header from "../components/Header";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  publishedPage:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    lineHeight:"1.7rem",
    "& img":{
      width: "30rem"
    },
    "& span":{
      color: "#C80028",
      cursor: "pointer",
    }
  }
})

function Published() {
  const classes = styles()
  return (
    <>
    <Header />
      <div className={classes.publishedPage + " max-margin"}>
        <img src="/Chatter2Logo2.svg" alt="Published" />
        <h1>🎉Yay!😍</h1>
        <p><b>Article</b> has been published</p>
        <div>
          <p>
            Share to Friends using this link <span><RiShareForward2Fill /></span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Published