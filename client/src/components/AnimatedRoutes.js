import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home  from "../pages/Home";
import Chat from "../pages/Chat";
// import { Nav } from "../components/Nav";
// import { CreateProfile } from "./pages/CreateProfile";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
