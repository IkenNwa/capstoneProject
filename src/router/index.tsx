import { Route, Routes, useLocation } from "react-router";
import Login from "../views/Login";
import Landing from "../views/Landing";
import NotFound from "../views/NotFound";
import RegisterWelcome from "../views/RegisterWelcome";
import { AnimatePresence } from "framer-motion";
import Register from "../views/Register";
function ChatterRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterWelcome />}/>
        <Route path="/register/:type" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default ChatterRoutes;
