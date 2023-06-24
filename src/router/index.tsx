/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes, useLocation } from "react-router";

import { useContext, useEffect, useState } from "react";
import Login from "../views/Login";
import Landing from "../views/Landing";
import NotFound from "../views/NotFound";
import { AnimatePresence } from "framer-motion";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import DashboardFeed from "../views/DashboardFeed";
import MyArticle from "../views/MyArticle";
import Editor from "../views/Editor";
import Post from "../views/Post";
import AccountSettings from "../views/AccountSettings";
import Published from "../views/Published";
import SearchView from "../views/SearchView";
import VerifyUser from "../views/VerifyUser";
import { FeedContext, PostContext, SearchContext } from "../context";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../config";
function ChatterRoutes() {
  const location = useLocation();
  const { post } = useContext<any>(PostContext);
  const {search} = useContext<any>(SearchContext);
  const {setFeed} = useContext<any>(FeedContext);
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

  
  return (
    <AnimatePresence>
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
        <Route path={`/post/${post.title}`} element={<Post />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default ChatterRoutes;
