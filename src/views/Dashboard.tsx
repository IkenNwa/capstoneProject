import { Outlet } from "react-router";
import Header from "../components/Header"
import MiniNav from "../components/MiniNav";


function Dashboard() {

  return (
    <div className="main">
      <Header />
      <div className="max-margin">
        <MiniNav />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard