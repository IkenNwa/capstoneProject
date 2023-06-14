/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import FeedItem from "./FeedItem"
import { useEffect, useState } from "react";
import { collection, onSnapshot} from "firebase/firestore";
import { db } from "../config";

const useStyles = createUseStyles({
    all: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "fit-content",
        width: "100%",
        padding: "2rem",
    },
    "@media (min-width: 490px)": {
        all: {
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "1rem",

        },
    },
    "@media (min-width: 1024px)": {
        all: {
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "1rem",
        },
    },
});
function FeedItemContainer() {
    const classes = useStyles();
    // Fetch all posts from database
    const [posts, setPosts] = useState<any>([]);
    useEffect(() => {
        onSnapshot(collection(db, "posts"), (snapshot) => {
            // setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            // set the posts state to the data from the database in order of newest to oldest
            setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse());
        }
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
  return (
    <div className={classes.all}>
        {posts.map((post: { id: any; title: string; overview: string; image: string; }) => (
            <FeedItem
                key={post.id}
                title={post.title}
                overview={post.overview}
                image={post.image}
            />
        ))}
    </div>
  );
}

export default FeedItemContainer