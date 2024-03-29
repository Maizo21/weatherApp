import React, { useState, useEffect } from "react";
import "./Search.css";
import searchIcon from "../image/search.svg";
import Result from "../Result/Result";
import Cities from "../Cities/Cities";

const Search = () => {
  const [city, setCity] = useState("");
  const [dataWeather, setDataWeather] = useState([]);
  const [location, setLocation] = useState(null);

  const capturingCity = async (event) => {
    event.preventDefault();
    const citySearch = city.toLowerCase();

    if (city !== "") {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&cnt=7&appid=c4518dbbb5454289eacfb4c1b2962acb&units=metric`)
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

  useEffect(() => {
    if (location === null) {
      fetch("https://api.geoapify.com/v1/ipinfo?apiKey=e68f993fa1e84e2581a4e63f18713f99")
      .then(response => response.json())
      .then(result => {
        setLocation(result.city.name)
        setCity(result.city.name)
        if(result.city.name){
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${result.city.name}&cnt=7&appid=c4518dbbb5454289eacfb4c1b2962acb&units=metric`)
            .then((response) => response.json())
            .then((data) => {
              if (data.cod === "404") {
                alert(`City: "${result.city.name}" not found`);
              } else {
                setDataWeather(data);
              }
          });
        }
      })
      .catch(error => console.log('error', error));
    }
  }
  , [location]);


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

        {dataWeather !== null && dataWeather !== "" && (
          <Result dataWeather={dataWeather} />
        )}
        


        <section>
          <Cities />
        </section>

      </main>
    </>
  );
};

export default Search;
