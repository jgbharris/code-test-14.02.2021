import React from 'react';
import '../index.css';

function CurrentWeather(props) {

    return (
    <div>
        <div className="location-container">
            <div>
                <img src={
              props.icon
                ? `http://openweathermap.org/img/wn/${props.icon}@4x.png`
                : null
            }></img></div>
            <div className="location">
                {props.city}, {props.country}

            </div>
            <div className="date"> {props.date}</div>
        </div>
        <div className="weather-container">
            <div className="temperature">{props.temp}°C</div>
            <div className="weather">{props.feels}</div>
            <div className="weather">{props.humidity}</div>
            <div className="weather">{props.description}</div>
        </div>
    </div>
    )
}

export default CurrentWeather;