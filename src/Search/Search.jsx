import React, { useState } from "react";
import "./Search.css";
import searchIcon from "../image/search.svg";
import Result from "../Result/Result";

const Search = () => {
  const [city, setCity] = useState("");
  const [dataWeather, setDataWeather] = useState([]);

  const capturingCity = async (event) => {
    event.preventDefault();
    const citySearch = city.toLowerCase();

    if (city != "") {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&cnt=7&appid=c4518dbbb5454289eacfb4c1b2962acb&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "404") {
            alert(`City: "${city}" not found`);
          } else {
            setDataWeather(data);
          }
        });
    } else {
      alert("Please enter a city");
    }
  };

  return (
    <>
      <main>
        <form className="formContainer" onSubmit={capturingCity}>
          <input
            type="text"
            className="search"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city"
          />
          <button>
            <img src={searchIcon} alt="searchIcon" />
          </button>
        </form>

        {dataWeather != null && dataWeather != "" && (
          <Result dataWeather={dataWeather} />
        )}
      </main>
    </>
  );
};

export default Search;
