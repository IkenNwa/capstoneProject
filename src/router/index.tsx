/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes, useLocation, useNavigate } from "react-router";
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
  const { search, setSearch } = useContext<any>(SearchContext);
  const { setFeed } = useContext<any>(FeedContext);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      // setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // set the posts state to the data from the database in order of newest to oldest
      setFeed(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse()
      );
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
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  //Find posts that match the search query in the url
  useEffect(() => {
    if (location.pathname.includes("search")) {
      const path = location.pathname.split("/")[2];
      setSearch(path);
      const q = collection(db, "posts");
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts: any = [];
        querySnapshot.forEach((doc) => {
          if (
            doc.data().title.toLowerCase().includes(search.toLowerCase()) ||
            doc.data().author.toLowerCase().includes(search.toLowerCase())
          ) {
            posts.push({ ...doc.data(), id: doc.id });
          }
          setFeed(posts.reverse());
        });
      });
      return () => {
        unsubscribe();
      };
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
          <Route path={`/search/${search}`} element={<SearchView />} />
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
