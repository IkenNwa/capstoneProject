/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FeedContext, PostContext, SearchContext } from "../context";
import { onSnapshot, collection, doc } from "firebase/firestore";
import { db } from "../config";
import {
  Editor,
  AccountSettings,
  Dashboard,
  Landing,
  Login,
  MyArticle,
  NotFound,
  Post,
  Published,
  Register,
  SearchView,
  VerifyUser,
  DashboardFeed,
  Loader,
} from "../views";
function ChatterRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { post, setPost } = useContext<any>(PostContext);
  const { search } = useContext<any>(SearchContext);
  const { setFeed } = useContext<any>(FeedContext);

  useEffect(() => {
    setIsLoading(true);
    onSnapshot(collection(db, "posts"), (snapshot) => {
      // setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // set the posts state to the data from the database in order of newest to oldest
      setFeed(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse()
      );
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Getting Post from url
  useEffect(() => {
    //Prevent loading not found page
    if (location.pathname.includes("post")) {
      const id = location.pathname.split("/")[2];
      onSnapshot(doc(db, "posts", id), (snapshot) => {
        if (snapshot.exists()) {
          setPost({ ...snapshot.data(), id: snapshot.id });
        } else {
          return;
        }
      }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="u/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardFeed />} />
            <Route path="myarticles" element={<MyArticle />} />
          </Route>
          <Route path="u/createProfile" element={<VerifyUser />} />
          <Route path={"u/search/" + search} element={<SearchView />} />
          <Route path="u/editor" element={<Editor />} />
          <Route path="u/completed" element={<Published />} />

          <Route path="u/settings" element={<AccountSettings />} />
          <Route path={`/post/${post.id}`} element={<Post />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default ChatterRoutes;
