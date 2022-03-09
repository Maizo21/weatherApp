import React from "react";
import "./Result.css";
import aguanieve from "../image/aguanieve.png";
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

  return (
    <>
      <div className="result-container">
        <h2>
          {weather.name}
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
      </div>
    </>
  );
};

export default Result;
