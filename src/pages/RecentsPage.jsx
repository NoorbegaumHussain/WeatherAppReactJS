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
          <div className="nothingtext">No Recent Search</div>
        </div>
      ) : (
        <>
          <div className="favtopbar">
            <div>You recently searched for</div>
            <div>Clear All</div>
          </div>
          <div className="comprender">
            <CardComponent />
            <CardComponent />
            <CardComponent />
  
          </div>
        </>
      )}
    </div>
  );
}
