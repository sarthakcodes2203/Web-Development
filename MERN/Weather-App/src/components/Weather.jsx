import React from "react";
import Search from "./Search";
import { useState, useEffect } from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faWind, faTint, faCloud, faCloudRain } from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.message);
      }
    } catch (e) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("durgapur");
  }, []);

  const getWeatherIcon = (description) => {
    if (!description) return faCloud;
    const desc = description.toLowerCase();
    if (desc.includes("clear") || desc.includes("sun")) return faSun;
    if (desc.includes("rain")) return faCloudRain;
    if (desc.includes("cloud")) return faCloud;
    return faCloud;
  };
  

  const convertKelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading || error ? (
        <div className="center-container">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="error">{error}</div>
          )}
        </div>
      ) : (
        <div className="weather-container">
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">
            <FontAwesomeIcon
              icon={getWeatherIcon(weatherData?.weather?.[0]?.description)}
              className="weather-icon"
            />
            {convertKelvinToCelsius(weatherData?.main?.temp)}°C
          </div>
          <p className="description">
            {weatherData?.weather?.[0]?.description || ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <FontAwesomeIcon icon={faWind} className="info-icon" />
              <p className="wind">{weatherData?.wind?.speed} m/s</p>
              <p>Wind Speed</p>
            </div>
            <div className="column">
              <FontAwesomeIcon icon={faTint} className="info-icon" />
              <p className="humidity">{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;