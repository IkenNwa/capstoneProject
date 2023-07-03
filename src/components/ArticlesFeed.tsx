/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react";
import FeedItemContainer from "./FeedItemContainer";
import NewArticle from "./NewArticle";
import { FeedContext, UserContext } from "../context";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config";

function ArticlesFeed() {
  //User and Feed Context
  const { setFeed } = useContext<any>(FeedContext);
  const { user } = useContext<any>(UserContext);
  //Set feed to posts that have the same id as the user?.id
  useEffect(() => {
    const q = collection(db, "posts");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts: any = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === user?.uid) {
          posts.push({ ...doc.data(), id: doc.id });
        }
        setFeed(posts.reverse());
      });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <FeedItemContainer />
      <NewArticle />
    </div>
  );
}

export default ArticlesFeed;
