import React from "react";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex weather-temperature">
          <img
            id="icon"
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt=""
          />
          <div>
            <strong id="temperature">16</strong>
            <span className="units">
              <a href="# " id="celsius-link" className="active">
                °C
              </a>{" "}
              |{" "}
              <a href="# " id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <li>Precipitation: 0%</li>
        <li>
          Humidity: <span id="humidity">79</span>%
        </li>
        <li>
          Wind: <span id="wind">7</span> km/h
        </li>
      </div>
    </div>
  );
}
