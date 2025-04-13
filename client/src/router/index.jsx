import React from "react";
import { Routes, Route } from "react-router-dom";
import LaunchPage from "../pages/launchPage";
import Register from "../pages/signup";
import Login from "../pages/singIn";

const RoutePage = () => {
  return (
    <Routes>
      <Route index element={<LaunchPage />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
};

export default RoutePage;
