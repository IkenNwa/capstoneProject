/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet } from "react-router";
import Header from "../components/Header"
import MiniNav from "../components/MiniNav";
import { useContext } from "react";
import { UserContext } from "../context";
import SEO from "../components/SEO";


function Dashboard() {
  const {user} = useContext<any>(UserContext);

  return (
    <div className="main">
      <SEO 
      title="Dashboard" 
      description="Dashboard"
      article={false}
      />
      {user?.displayName ? (
        <>
        <Header />
      <div className="max-margin">
        <MiniNav />
        <Outlet />
      </div>
      </>
      ) : (
        <Navigate to="/u/createProfile" />
      )}
    </div>
  );
}

export default Dashboard