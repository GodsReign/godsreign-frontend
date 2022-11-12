import React from "react";
import "./dashBoard.css";
import HeroSlider from "./heromenu/heroSliderTest";
import Partner from "./partner";
import OurDivision from "./division/ourDivision";
import LatestUpdate from "./latestupdate/latestUpdate";
import SocialFeed from "./socialFeed/SocialFeed";
import OurProducts from "./products/ourProducts";
function DashBoard() {
  return (
    <div className="container tw-pt-10">
      <HeroSlider />
      <section className="tw-flex tw-justify-between partner__section">
        <Partner />
        <OurProducts />
      </section>
      <section className="tw-pt-36">
        <OurDivision />
      </section>
      <section className="tw-pt-36">
        <LatestUpdate />
      </section>
      <section className="tw-pt-36">
        <SocialFeed />
      </section>
    </div>
  );
}

export default DashBoard;
