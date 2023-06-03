import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  review: {
    padding: "2em",
    display: "flex",
    flexDirection: "column",
  },

  profile: {
    backgroundColor: "#C80028",
    color: "white",
    padding: "1em",
    width: "max-content",
    height: "fit-content",
    borderRadius: "50%",
  },
  comment: {
    display: "flex",
    width: "100%",
    height: "fit-content",
  },
  textarea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    height: "fit-content",
    "& textarea": {
      width: "100%",
      padding: "10px",
      marginInlineStart: "10px",
    },
    "& button": {
      width: "100px",
      padding: "10px",
      marginInlineStart: "10px",
      marginBlockStart: "10px",
      backgroundColor: "#C80028",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  },
});

function CreditsBanner() {
    const classes = useStyles()
  return (
    <div>
      <div className={classes.review}>
        
        <form className={classes.comment}>
          <div className={classes.profile}>AK</div>
          <div className={classes.textarea}>
            <textarea placeholder="Your Comment here!.."></textarea>
            <button className="btn" type="submit">Comment</button>
          </div>
        </form>
      </div>
      <div>

      </div>
    </div>
  );
}

export default CreditsBanner