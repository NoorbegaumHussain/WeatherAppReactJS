import React from "react";
import '../styles/FavouritesPage.css'
export default function CardComponent() {
  return (
    <div className="compdiv">
      <div className="compdivmobdiv">
      <div className="comptext1">Udupi, Karnataka</div>
      <div className="compdivin">
        <img
          src={require("../assets/images/icon_favourite.png")}
          alt="comp_icon"
          className="comp_icon"
        />
        <p className="comptext2">32 <span className="degree-text">°c</span> </p>
        <p className="comptext3">Mostly Sunny</p>
      </div>
      </div>
      {false ? (
        <img
          src={require("../assets/images/favourite_icon_copy.png")}
          alt="favourite"
          className="fav_icon"
        />
      ) : (
        <img
          src={require("../assets/images/icon_favourite_Active.png")}
          alt="favourite"
          className="fav_icon"
        />
      )}
    </div>
  );
}
