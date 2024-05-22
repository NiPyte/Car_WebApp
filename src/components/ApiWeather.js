import React, {useEffect, useState} from "react";


const ApiWeather = () => {

    const [weather, setWeather] = useState(null);

    const API_Key_Weather = 'c42daad2b337c2d7b723b19156e4cbbf'
    const City_Name = 'Sumy'

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${City_Name}&appid=${API_Key_Weather}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(error => console.error('Error fetching weather:', error));
    }, []);

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div className="weatherData">
            <div>
                <div className="weather">Weather</div>
                <div>City: {weather.name}</div>
                <div>Temperature: {Math.round(weather.main.temp) - 273} °C</div>
            </div>
            <img className="icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon"/>
        </div>
    );
};

export default ApiWeather;
