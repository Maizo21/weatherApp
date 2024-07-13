import React from "react";
import "./Result.css";
import humedad from "../image/humedad.png";
import lluvioso from "../image/lluvioso.png";
import lluvia from "../image/lluvia.png";
import nieve from "../image/nieve.png";
import noche from "../image/noche.png";
import nublado from "../image/nublado.png";
import tormenta from "../image/tormenta.png";
import dia from "../image/sol.png";

const Result = (data) => {
  let weather = data.dataWeather;
  let image;
  if(weather.weather === undefined){
    return null;
  }  
  else{
    switch (weather.weather[0].main) {
      case "Thunderstorm":
        image = tormenta;
        break;
  
      case "Drizzle":
        image = lluvioso;
        break;
  
      case "Rain":
        image = lluvia;
        break;
  
      case "Snow":
        image = nieve;
        break;
  
      case "Clouds":
        image = nublado;
        break;
  
      default:
        if (weather.weather[0].icon === "01d") {
          image = dia;
        } else {
          image = noche;
        }
        break;
    }
  }

  const saveCity = () => {
    let cities = JSON.parse(localStorage.getItem("cities"));
    if (cities === null) {
      cities = [];
    }
    if (!cities.includes(weather.name)) {
      cities.push(weather.name);
      localStorage.setItem("cities", JSON.stringify(cities));
      alert("City saved");
      let locationURLParams = new URLSearchParams(window.location.search);
      let city = locationURLParams.get('city');
      if(city !== null){
        window.location.href = '/';
      }
    } else {
      let newCities = cities.filter((city) => city !== weather.name);
      localStorage.setItem("cities", JSON.stringify(newCities));
      alert("City removed");
      let locationURLParams = new URLSearchParams(window.location.search);
      let city = locationURLParams.get('city');
      if(city !== null){
        window.location.href = '/';
      }
    }
  }

  let savedCitie = false;

  if(localStorage.getItem("cities") !== null){
    let cities = JSON.parse(localStorage.getItem("cities"));
    savedCitie = cities.includes(weather.name);
  }


  return (
    <>
      <div className="result-container">
        <h2>
          Today {weather.name}
          <small>, {weather.sys.country}</small>
        </h2>
        <img src={image} alt="Icono" />
        <h3>{weather.main.temp.toFixed(0)}°</h3>

        <small>
          max: {weather.main.temp_max.toFixed(0)}° / min:{" "}
          {weather.main.temp_min.toFixed(0)}°
        </small>

        <div className="humedity-container">
          <h4>humidity</h4>
          <small className="humedity">
            <img src={humedad} alt="icono humedad" />
            {weather.main.humidity}%
          </small>
        </div>

        <div className={`save-city ${savedCitie ? 'saved' : null }`} >
          <button onClick={saveCity}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>

      </div>
    </>
  );
};

export default Result;
