import React from "react";
import { NavLink } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <h1 className="welcome-title">welcome back diane</h1>
      <NavLink to="/sidebar">
        <button className="dashboard-btn">Go to your Dashboard</button>
      </NavLink>
    </div>
  );
};

export default Welcome;
