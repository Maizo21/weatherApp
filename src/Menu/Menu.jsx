import React from "react";
import "./Menu.css";
import logo from "../image/weather.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/weatherApp">Home</Link>
          </li>
          <li>
            <Link to="/CitiesSaved">Cities Saved</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
