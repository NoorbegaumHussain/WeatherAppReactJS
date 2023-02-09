import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import "../styles/MainPage.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import moment from "moment";

export default function MainPage() {
  const [currentDate, setcurrentDate] = useState();
  const [dialog, setDialog] = useState(false);
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
      <div className="mobile-header-container">
        <div className="right-header">
          <img
            src={require("../assets/images/icon_menu_white.png")}
            className="burger-menu"
            alt="logo"
            onClick={() => {
              setDialog(true);
            }}
          />
          <img
            src={require("../assets/images/logo_web.png")}
            className="logomobile"
            alt="logo"
          />
        </div>
        <img
          src={require("../assets/images/icon_search_white.png")}
          alt="search"
          className="search-icon-mobile"
          // onClick={() => {
          //   if (name === "folder") {
          //     handleDrop();
          //   } else handleVisible();
          // }}
        />
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

        {dialog ? (
          <div className="burger-container">
            <NavLink to={"/"}>
              <p
                onClick={() => {
                  setDialog(false);
                }}
                className="navlinksmobile"
              >
                Home
              </p>
            </NavLink>
            <NavLink to={"/favourites"}>
              <p
                onClick={() => {
                  setDialog(false);
                }}
                className="navlinksmobile"
              >
                Favuorite
              </p>
            </NavLink>
            <NavLink to={"/recents"}>
              <p
                onClick={() => {
                  setDialog(false);
                }}
                className="navlinksmobile"
              >
                Recent
              </p>
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
