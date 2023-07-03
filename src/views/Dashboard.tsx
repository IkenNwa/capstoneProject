/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet } from "react-router";
import { Header, MiniNav, SEO } from "../components";
import { useContext } from "react";
import { UserContext } from "../context";


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