import Header from "../components/Header";
import { createUseStyles } from "react-jss";
import SEO from "../components/SEO";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/u/dashboard")
  }, 3000);

  return (
    <>
    <SEO title="Published" />
    <Header />
      <div className={classes.publishedPage + " max-margin"}>
        <img src="/Chatter2Logo2.svg" alt="Published" />
        <h1>🎉Yay!😍</h1>
        <p><b>Article</b> has been published</p>
      </div>
    </>
  );
}

export default Published