import { createUseStyles } from "react-jss";
import { useState } from "react";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFEFEF",
        borderRadius: "5px",
        padding: "0.5rem 0",
        color: "#C80028",
        position: "absolute",
        bottom: "4rem",
        right: "1rem",
        "& input": {
            margin: "0 0.5rem",
            padding: "0.5rem",
            border: "none",
            outline: "none",
            backgroundColor: "#FFF",
            borderRadius: "5px",
            fontSize: "10px",
        },
        "& button": {
            margin: "0 0.5rem",
            padding: "0.5rem",
            border: "2px solid #C80028",
            outline: "none",
            backgroundColor: "#FFEFEF",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "10px",
            color: "#C80028",
            "&:hover": {
                backgroundColor: "#C80028",
                color: "#FFEFEF",
            },
        },
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddImage = ({ active, mark, setMark, setActive }:any) => {
    const classes = useStyles();
    const [link, setLink] = useState("");
    const [alt, setAlt] = useState("");
    if (active) {
        return (
        <div className={classes.container}>
            <input type="text" placeholder="Link" onChange={(e) => setLink(e.target.value)} />
            <input type="text" placeholder="Alt-Text" onChange={(e) => setAlt(e.target.value)} />
            <button
                onClick={() => {
                setActive(false);
                setMark(mark + `\n![${alt}](${link})`);
                }
            }
            >Insert</button>
        </div>
        );
    }else{
        return null;
    }
};


export default AddImage;