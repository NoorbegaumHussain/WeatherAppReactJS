import React from "react";
import "../styles/HomePage.css";
export default function HomePage() {
  return (
    <div className="">
      <p className="city-name">Udupi, Karnataka</p>
      <div className="fav-container">
        <img
          src={require("../assets/images/icon_favourite.png")}
          className="fav-icon"
          alt="logo"
        />
        <p className="add-fav-text">Add to favourite</p>
      </div>
      <div className="">
        <img
          src={require("../assets/images/icon_favourite.png")}
          className="temperature-icon"
          alt="logo"
        />
        <div className="temp-group">
        <p className="temperature">
          87
        </p>
        <div>
          <p>C</p>
          <p>F</p>
        </div>
        </div>
        <p className="temp-description">
          Mostly Sunny
        </p>
      </div>
    </div>
  );
}
