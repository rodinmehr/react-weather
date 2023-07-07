import React from "react";

export default function Weather() {
  function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let forecastMaxTemperatureElements = document.querySelectorAll(
      ".weather-forecast-temperature-max"
    );
    let forecastMinTemperatureElements = document.querySelectorAll(
      ".weather-forecast-temperature-min"
    );
    celsiusLinkElement.classList.remove("active");
    fahrenheitLinkElement.classList.add("active");
    let fahrenheitTemperature = Math.round((celsiusTemperature * 9) / 5 + 32);
    temperatureElement.innerHTML = fahrenheitTemperature;

    forecastMaxTemperatureElements.forEach(
      (forecastMaxTemperatureElement, index) => {
        forecastMaxTemperatureElement.innerHTML =
          Math.round((celsiusForecastMaxTemperatures[index] * 9) / 5 + 32) +
          "°";
      }
    );
    forecastMinTemperatureElements.forEach(
      (forecastMinTemperatureElement, index) => {
        forecastMinTemperatureElement.innerHTML =
          Math.round((celsiusForecastMinTemperatures[index] * 9) / 5 + 32) +
          "°";
      }
    );
  }

  function displayCelsiusTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let forecastMaxTemperatureElements = document.querySelectorAll(
      ".weather-forecast-temperature-max"
    );
    let forecastMinTemperatureElements = document.querySelectorAll(
      ".weather-forecast-temperature-min"
    );
    fahrenheitLinkElement.classList.remove("active");
    celsiusLinkElement.classList.add("active");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    forecastMaxTemperatureElements.forEach(
      (forecastMaxTemperatureElement, index) => {
        forecastMaxTemperatureElement.innerHTML =
          Math.round(celsiusForecastMaxTemperatures[index]) + "°";
      }
    );
    forecastMinTemperatureElements.forEach(
      (forecastMinTemperatureElement, index) => {
        forecastMinTemperatureElement.innerHTML =
          Math.round(celsiusForecastMinTemperatures[index]) + "°";
      }
    );
  }

  // let fahrenheitLinkElement = document.querySelector("#fahrenheit-link");
  // fahrenheitLinkElement.addEventListener("click", displayFahrenheitTemperature);

  // let celsiusLinkElement = document.querySelector("#celsius-link");
  // celsiusLinkElement.addEventListener("click", displayCelsiusTemperature);

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
