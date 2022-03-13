import React from "react";
import "./Leftscreen.css";
import { Link } from "react-router-dom";
const Leftscreen = () => {
  return (
    <div className="left-screen">
      <Link to="/">
        {" "}
        <div className="left-screen-content">
          <i className="fa fa-home"></i>
          <h3>Home</h3>
        </div>
      </Link>
      <Link to="/profile">
        <div className="left-screen-content">
          <i className="fa fa-user"></i>
          <h3>Profile</h3>
        </div>
      </Link>
    </div>
  );
};
export default Leftscreen;
