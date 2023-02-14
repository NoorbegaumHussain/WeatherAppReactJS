import moment from "moment";
import React, { useEffect, useState } from "react";
import SwitchButton from "../components/SwitchButton";
import "../styles/HomePage.css";
import { getData } from "../services/getData";

export default function HomePage() {
  const [checked, setChecked] = useState(false);
  const [currentDate, setcurrentDate] = useState();
  const [citydata, setCityData] = useState();

  const getDetails = async () => {
    const data = await getData("udupi");
    console.log(",........", data);
    setCityData(data);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const updateDate = () => {
    const date = moment(new Date().toString()).format(`ddd, D MMM YYYY h:mm A`);
    setcurrentDate(date);
  };
  useEffect(() => {
    updateDate();
    getDetails();
  }, []);

  return (
    <>
      <div className="home-container">
        <p className="current-date-mobile">{currentDate}</p>
        <p className="city-name">
          {citydata?.location?.name}, {citydata?.location?.region}
        </p>
        <div className="fav-container">
          <img
            src={require("../assets/images/icon_favourite.png")}
            className="fav-icon"
            alt="logo"
          />
          <p className="add-fav-text">Add to favourite</p>
        </div>
        <div className="temp-container">
          <img
            src={citydata?.current?.condition?.icon}
            className="temperature-icon"
            alt="logo"
          />
          <div className="temp-group">
            <p className="temperature">{checked ? citydata?.current?.temp_f : citydata?.current?.temp_c }</p>
            <SwitchButton onChange={handleChange} checked={checked} />
          </div>
          <p className="temp-description">{citydata?.current?.condition?.text}</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="temp-details-container">
        <div className="individual-temp-detail">
          <img
            src={require("../assets/images/icon_temperature_info.png")}
            className="thermo"
            alt="logo"
          />
          <div className="temp-desc">
            <p className="actual-entity">Min-Max</p>
            <p className="actual-value">75°-90°</p>
          </div>
        </div>

        <div className="individual-temp-detail">
          <img
            src={require("../assets/images/icon_precipitation_info.png")}
            className="precipitation"
            alt="logo"
          />
          <div className="temp-desc">
            <p className="actual-entity">Precipitation</p>
            <p className="actual-value">{citydata?.current?.precip_in}</p>
          </div>
        </div>
        <div className="individual-temp-detail">
          <img
            src={require("../assets/images/icon_humidity_info.png")}
            className="humidity"
            alt="logo"
          />
          <div className="temp-desc">
            <p className="actual-entity">Humidity</p>
            <p className="actual-value">{citydata?.current?.humidity}</p>
          </div>
        </div>
        <div className="individual-temp-detail">
          <img
            src={require("../assets/images/icon_wind_info.png")}
            className="wind"
            alt="logo"
          />
          <div className="temp-desc">
            <p className="actual-entity">Wind</p>
            <p className="actual-value">{citydata?.current?.wind_degree}</p>
          </div>
        </div>
        <div className="individual-temp-detail">
          <img
            src={require("../assets/images/icon_visibility_info.png")}
            className="visibility"
            alt="logo"
          />
          <div className="temp-desc">
            <p className="actual-entity">Visibility</p>
            <p className="actual-value">{citydata?.current?.vis_km}</p>
          </div>
        </div>
      </div>
    </>
  );
}
