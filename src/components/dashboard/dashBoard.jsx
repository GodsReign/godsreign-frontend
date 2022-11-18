import React, { useState } from "react";
import "./dashBoard.css";
import HeroSlider from "./heromenu/heroSliderTest";
import Partner from "./partner";
import OurDivision from "./division/ourDivision";
import LatestUpdate from "./latestupdate/latestUpdate";
import SocialFeed from "./socialFeed/SocialFeed";
import OurProducts from "./products/ourProducts";
import LatestVideo from "./latestVideo/latestVideo";
function DashBoard() {
  const [bg, setBg] = useState("images/video3.png");
  const handleChange = (bgImage) => {
    setBg(bgImage);
    //console.log(bgImage);
  };
  return (
    <div className="container tw-pt-10 ">
      <section className="dashboard__hero__grid">
        <HeroSlider handleChange={handleChange} />
        <Partner />
        <OurProducts />
      </section>
      <section className="">
        <OurDivision />
      </section>
      <section className="tw-pt-36">
        <LatestUpdate />
      </section>
      <section className="tw-pt-36">
        <LatestVideo />
      </section>
      <section className="tw-pt-36">
        <SocialFeed />
      </section>
    </div>
  );
}

export default DashBoard;
