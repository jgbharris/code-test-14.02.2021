import React, { useState } from "react";
import CurrentWeather from './Components/CurrentWeather'
import ForecastWeatherBox from './Components/ForecastWeatherBox'
import keys from "./keys";
import "./App.css";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(0, 21);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  let forecastWeather = []

  console.log("weather", weather)
  console.log("forecastWeather", forecastWeather)

  // eslint-disable-next-line
  weather && weather.list ? forecastWeather = weather.list.slice(1) : null
  console.log("forecastWeather", forecastWeather)

  return (
    <div>
      <main>
        <h1 className="title">Weather App</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter City"
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather != "undefined" && typeof weather.list != "undefined" ? <CurrentWeather
          icon={weather.list[0]["weather"][0]["icon"]}
          city={weather.city.name}
          country={weather.city.country}
          date={dateBuild(new Date())}
          temp={Math.round(weather.list[0]["main"]["temp"])}
          feels={Math.round((weather.list[0]["main"]["feels_like"]))}
          humidity={(weather.list[0]["main"]["humidity"])}
          description={(weather.list[0]["weather"][0]["description"])} /> : null}
          {forecastWeather
                ? forecastWeather.map((forecastBox, index) => (
                    <ForecastWeatherBox
                        key={index}
                        time={forecastBox.dt_txt}
                        icon={forecastBox["weather"][0]["icon"]}
                        temp={Math.round(forecastBox["main"]["temp"])}
                    />
                ))
                : null}
      </main>
    </div>
  );
}

export default App;
