import React from "react";
import logo from "../../assets/gods_logo.svg";
import "./navBar.css";
import menuicon from "../../assets/menu.svg";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="container">
      <section className="nav nav--flex ">
        <NavLink to="/">
          <img className="icon" src={logo} alt="gods_logo"></img>
        </NavLink>
        <ul className="list list__items token token--greyscale toggle nav__list--greyscale">
          <li className="list__item active">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="rosters"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Rosters
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="achievements"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Achievements
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About us
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
        <span>
          <img className="icon icon--white icon--small" src={menuicon} alt="" />
        </span>
      </section>
    </nav>
  );
}

export default Navbar;
