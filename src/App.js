import "./App.css";
import SearchCity from "./SearchCity";
import Overview from "./Overview";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <SearchCity />
            <Overview />
            <Weather />
            <WeatherForecast />
          </div>
          <p className="mt-3">
            <a
              href="https://github.com/rodinmehr/react-weather"
              target="_blank"
              alt="react weather app"
            >
              Open-source code
            </a>
            , by{" "}
            <a
              href="https://rodinmehr.github.io/"
              alt="Mahsa Radinmehr Website"
              target="_blank"
            >
              Mahsa Radinmehr
            </a>
          </p>
        </div>
      </div>
      <script src="src/main.js"></script>
    </div>
  );
}
