import { motion } from "framer-motion"
import { useState } from "react"
import { RxPencil1 } from "react-icons/rx"
import { createUseStyles } from "react-jss"
import { useNavigate } from "react-router";

const styles = createUseStyles({
  button: {
    backgroundColor: "#C80028",
    width: "50px",
    color: "#FFEFEF",
    borderRadius: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBlock: "10px",
    height: "50px",
    fontSize: "1.3rem",
    position: "fixed",
    bottom: 0,
    right: 0,
  },
});

function NewArticle() {
    const [active, setActive] = useState(false)
    const classes = styles();
    const [text, setText] = useState("");
    const navigate = useNavigate()

    if (active) {
        setTimeout(() => {
            setText(" Create New Post")
        }, 500);
    }else{
        //...
    }
    
  return (
    <motion.div
    onMouseEnter={() => setActive(true)}
    onMouseLeave={() => setActive(false)}
    onClick={() => navigate("/u/editor")}
    className={classes.button}
    animate={active ? ({width: "200px", borderRadius: "25px"}) : ({width: "50px"})}
    transition={{duration: 0.5,}}
    >
        {active ? (
        <>
            <RxPencil1 />
            {text}
        </>
        ) : (<RxPencil1 />)}
    </motion.div>
  )
}

export default NewArticle