
import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import SignUp from "../pages/signup";
import Dashboard from "../pages/dashboard";

const RoutePage = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutePage;