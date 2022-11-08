import React from "react";
import Products from "./products";
import "./dashBoard.css";
import HeroSlider from "./heroSlider";
import jerseyBlack from "../../assets/jerseyBlack.png";
import jerseyGold from "../../assets/jerseyGold.png";
function DashBoard() {
  return (
    <div className="container">
      <HeroSlider />
      <section className="tw-flex">
        <Products img={jerseyBlack} />
        <Products img={jerseyGold} />
      </section>
    </div>
  );
}

export default DashBoard;
