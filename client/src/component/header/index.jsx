import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/signin");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <header className="mern-header">
      <div className="mern-header-container">
        <div className="mern-header-logo">
          <h4>Image</h4>
        </div>
        <div className="mern-header-auth">
          <button className="mern-header-auth-btn" onClick={handleLogin}>Login</button>
          <button
            className="mern-header-auth-btn onClick={handleLogin}"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
