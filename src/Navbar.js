import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h3 className="nav-item">Home</h3>
      </Link>
      <Link to="/profile">
        <h3 className="nav-item">Profile</h3>
      </Link>
      <h3>Log Out</h3>
    </nav>
  );
};
export default Navbar;
