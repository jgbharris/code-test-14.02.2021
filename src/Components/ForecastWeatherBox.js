function ForecastWeatherBox(props) {
    return (
        <div className="forecastWeatherBox">
            <div className="temperature">{props.time}</div>
            <div>
                <div>
                    <img src={
                        props.icon
                            ? `http://openweathermap.org/img/wn/${props.icon}@2x.png`
                            : null
                    } />
                </div>
            </div>
                <div className="temperature">{props.temp}°C</div>
        </div>
    )
}

export default ForecastWeatherBox;