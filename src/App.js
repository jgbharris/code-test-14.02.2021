import React, { useState } from "react";
import CurrentWeather from './Components/CurrentWeather'
import keys from "./keys";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    console.log("date 1", date)
    date = date.slice(0, 21);
    console.log("date 2", date)
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      // fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${api.key}`)
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&APPID=${api.key}`)
      // fetch(`http://pro.openweathermap.org/data/2.5/forecast/hourly?q=London,us&mode=xml&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
          // console.log(result.list[0])
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 18
            ? "App hot"
            : "App cold"
          : "App"
      }
    >
      <main>
        <div className="search-container">
          <label>
            Enter City Name:
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </label>
        </div>
        {typeof weather != "undefined" && typeof weather.list != "undefined" ? (
          <div>
            <div className="location-container">
            <div><img src={`http://openweathermap.org/img/wn/${weather.list[0]["weather"][0]["icon"]}@4x.png`}></img></div>
              <div className="location">
                {weather.city.name}, {weather.city.country}
                
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.list[0]["main"]["temp"])}°C
              </div>
              <div className="weather">{(weather.list[0]["main"]["feels_like"])}</div>
              <div className="weather">{(weather.list[0]["main"]["humidity"])}</div>
              <div className="weather">{(weather.list[0]["weather"][0]["description"])}</div>
            </div>
          </div>
        ) : (
          "City not found"
        )}
        {typeof weather != "undefined" && typeof weather.list != "undefined" ? <CurrentWeather
          icon={weather.list[0]["weather"][0]["icon"]}
          city={weather.city.name}
          country={weather.city.country}
          date={dateBuild(new Date())}
          temp={Math.round(weather.list[0]["main"]["temp"])}
          feels={(weather.list[0]["main"]["feels_like"])}
          humidity={(weather.list[0]["main"]["humidity"])}
          description={(weather.list[0]["weather"][0]["description"])}/> : null}
  
      </main>
    </div>
  );
}

export default App;
