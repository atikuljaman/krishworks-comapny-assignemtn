import React from "react";
import { BsPerson, BsSearch, BsPlusLg } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-left">
        <BsPerson className="navigation-user-icon" />
        <h5 className="navigation-user-name">Diane Cooper</h5>
      </div>
      <div className="navigation-right">
        <div className="search-container">
          <BsSearch />
          <input className="search-input" placeholder="Search" />
        </div>
        <button className="upload-btn">
          <BsPlusLg className="plus-icon" />
        </button>
        <button className="notification-btn">
          <MdNotifications className="notification-icon" />
          <div className="circle"></div>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
