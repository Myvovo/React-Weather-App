import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Roodeport",
    temperature: 25,
    date: "Friday 12:54",
    description: "Cloudy",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    humidity: 32,
    wind: 18
  };

  return (
    <div className="Weather">
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="Enter city"
            className="city-input"
            name="search"
          />
          <button type="submit"> Search</button>
          <button type="outcome" className="current-location-button">
            {" "}
            Current
          </button>
        </form>
      </div>
      <div className="row">
        <div className="col">
          <h1> {weatherData.newcity} </h1>
          <ul className="details">
            <li> {weatherData.description} </li>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="icon"
            />
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ul className="details">
            <li>
              {" "}
              <strong> {weatherData.temperature}> </strong>{" "}
              <span className="unit"> °C </span>
            </li>
            <li>speed:{weatherData.wind} km/h</li>
            <li>humidity: {weatherData.humidity}%</li>
            <li> {weatherData.date} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
