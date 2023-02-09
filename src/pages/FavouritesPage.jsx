import React from "react";
import CardComponent from "../components/CardComponent";
import '../styles/FavouritesPage.css'

export default function FavouritesPage() {
  return (
    <div className="main">
      {!true ? (
        <div className="nothingdiv">
          <img
            src={require("../../assets/images/icon_nothing.png")}
            alt="icon_nothing"
            className="icon_nothing"
            height={85}
            width={160}
          />
          <div className="nothingtext">No Favourites added</div>
        </div>
      ) : (
        <>
          <div className="favtopbar">
            <div>6 City added as favourite</div>
            <div>Remove All</div>
          </div>
          <div className="comprender">
            <CardComponent />
  
          </div>
        </>
      )}
    </div>
  );
}
