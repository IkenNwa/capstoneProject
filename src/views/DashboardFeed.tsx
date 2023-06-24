/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react";
import FeedItemContainer from "../components/FeedItemContainer"
import { FeedContext } from "../context";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config";

function DashboardFeed() {
  const {setFeed} = useContext<any>(FeedContext);
  //Set feedto all posts
  useEffect(() => {
    const q = collection(db, "posts");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts: any = [];
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      setFeed(posts.reverse());
    });
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <div>
      <FeedItemContainer />
    </div>
  )
}

export default DashboardFeed