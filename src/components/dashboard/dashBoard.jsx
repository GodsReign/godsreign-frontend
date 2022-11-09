import React from "react";
import Products from "./products";
import "./dashBoard.css";
import HeroSlider from "./heroSlider";
import jerseyBlack from "../../assets/jerseyBlack.png";
import jerseyGold from "../../assets/jerseyGold.png";
import Partner from "./partner";
import OurDivision from "./ourDivision";
import LatestUpdate from "./latestupdate/latestUpdate";
import SocialFeed from "./socialFeed/SocialFeed";
function DashBoard() {
  return (
    <div className="container">
      <HeroSlider />
      <section className="tw-flex tw-justify-between partner__section">
        <Partner />
        <section className="products tw-flex tw-relative">
          <h3 className="products__heading tw-absolute ">Our Products</h3>
          <Products img={jerseyBlack} />
          <Products img={jerseyGold} />
        </section>
      </section>
      <section className="tw-pt-16">
        <OurDivision />
      </section>
      <section className="tw-pt-28">
        <LatestUpdate />
      </section>
      <section className="tw-pt-28">
        <SocialFeed />
      </section>
    </div>
  );
}

export default DashBoard;
