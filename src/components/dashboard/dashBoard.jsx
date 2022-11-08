import React from "react";
import Products from "./products";
import "./dashBoard.css";
import HeroSlider from "./heroSlider";
import jerseyBlack from "../../assets/jerseyBlack.png";
import jerseyGold from "../../assets/jerseyGold.png";
import Partner from "./partner";
function DashBoard() {
  return (
    <div className="container">
      <HeroSlider />
      <section className="tw-flex tw-justify-between">
        <Partner />
        <section className="tw-flex tw-relative">
          <h3 className="products__heading tw-absolute ">Our Products</h3>
          <Products img={jerseyBlack} />
          <Products img={jerseyGold} />
        </section>
      </section>
    </div>
  );
}

export default DashBoard;
