import './WeatherApp.css';
import search_icon from '../Asset/search.png';
import clear_icon from '../Asset/clear.png';
import drizzle_icon from '../Asset/drizzle.png';
import humid_icon from '../Asset/humid.png';
import rainy_icon from '../Asset/rainy.png';
import snow_icon from '../Asset/snow.png';
import sunny_icon from '../Asset/sunny.png';
import windy_icon from '../Asset/windy.png';
import { useState } from 'react';

export const WeatherApp = () => {

  let api_key="30ff5599c231bcf6666c8a513ef6781c";

const [wicon,setWicon] =useState(clear_icon);
  const search = async ()=> {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value==="")
      {
        return 0;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

      let response = await fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-percent")
      const wind = document.getElementsByClassName("wind-rate")
      const temperature = document.getElementsByClassName("weather-temp")
      const location = document.getElementsByClassName("weather-location")

      humidity[0].innerHTML = data.main.humidity+" %";
      wind[0].innerHTML = data.wind.speed+" km/h";
      temperature[0].innerHTML =Math.floor(data.main.temp)+"°C";
      location[0].innerHTML = data.name;

      if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
        setWicon(sunny_icon);
      }

      else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
        setWicon(clear_icon);
      }
      
      else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
        setWicon(drizzle_icon);
      }
      else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
        setWicon(drizzle_icon);
      }
      else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
        setWicon(rainy_icon);
      }

      else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
        setWicon(rainy_icon);
      }
      else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
        setWicon(snow_icon);
      }
      else{
        setWicon(clear_icon);
      }

  }
  return (
    <div className='container'>
      <div className="topbar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>

      <div className="weather-temp">
        24°C
      </div>
      <div className="weather-location">
        London
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humid_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windy_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
