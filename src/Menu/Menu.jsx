import React from "react";
import "./Menu.css";
import logo from "../image/weather.png";

const Menu = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="/citiesSaved">My Cities</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
