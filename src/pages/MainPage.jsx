import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import "../styles/MainPage.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import moment from "moment";

export default function MainPage() {
  const [currentDate, setcurrentDate] = useState();

  const updateDate = () => {
    const date = moment(new Date().toString()).format(`ddd, D MMM YYYY h:mm A`);
    setcurrentDate(date);
  };
  useEffect(() => {
    updateDate();
  });

  return (
    <div className="rectangle">
      <div className="header-container">
        <img
          src={require("../assets/images/logo_web.png")}
          className="logoweb"
          alt="logo"
        />
        <SearchInput />
      </div>
      <div className="nav-container">
        <nav className="navbar">
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              to="/"
            >
              HOME
            </NavLink>

            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              FAVOURITE
            </NavLink>
            <NavLink
              to="/recents"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              RECENT SEARCH
            </NavLink>
          </div>
          <p className="current-date">{currentDate}</p>
        </nav>
        <div className="line"></div>
        <div className="content-contrainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
