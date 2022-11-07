import React from "react";
import logo from "../assets/gods_logo.svg";
import "./navBar.css";
import menuicon from "../assets/menu.svg";
function Navbar() {
  return (
    <nav className="container nav nav--flex">
      <a href="#">
        <img className="icon" src={logo} alt="gods_logo"></img>
      </a>
      <ul className="list list__items token token--greyscale">
        <li className="list__item active">
          <a href="#">Home</a>
        </li>
        <li className="list__item">
          <a href="#">Rosters</a>
        </li>
        <li className="list__item">
          <a href="#">Achievements</a>
        </li>
        <li className="list__item">
          <a href="#">About us</a>
        </li>
        <li className="list__item">
          <a href="#">Contact us</a>
        </li>
      </ul>
      <span>
        <img className="icon icon--white icon--small" src={menuicon} alt="" />
      </span>
    </nav>
  );
}

export default Navbar;
