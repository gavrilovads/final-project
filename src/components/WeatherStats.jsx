import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/weather-loading.json";

const WeatherStats = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const fetchWeather = async () => {
    const lat = 47.33019374897952;
    const lon = 28.80617931110682;
    const apiKey = "875910ad6c133a0246090e1113dbe428    ";
    const exclude = "current,minutely,hourly,alerts";
    const units = "metric";

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${apiKey}`;

    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTimeout(() => {
        setWeatherData(data);
        setLoading(false);
      }, 4000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="weather-stats-container">
      <button
        onClick={fetchWeather}
        disabled={loading}
        className="button secondary-button large-button"
      >
        Weather forecast
      </button>
      {loading && <Lottie options={defaultOptions} height={120} width={120} />}
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div>
          <ul className="weather-ul">
            {weatherData.daily.slice(0, 3).map((day, index) => (
              <li className="weather-li" key={index}>
                <div className="weather-temp">
                  {Math.round(day.temp.day, 1)} °C
                </div>

                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />
                <div className="weather-date">
                  {new Date(day.dt * 1000).toLocaleDateString("ro-RO")}{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherStats;
