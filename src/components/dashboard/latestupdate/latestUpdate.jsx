import React from "react";
import SectionHeader from "../sectionHeader";
import latestCardData from "./latestCardData";
import LatestUpdateCard from "./latestUpdateCard";
function LatestUpdate() {
  return (
    <section className="latest-update">
      <SectionHeader text={'Latest Update'} />
      <section className="latest-update__card">
        {latestCardData.map((item, index) => (
          <LatestUpdateCard img={item.img} key={index} />
        ))}
      </section>
    </section>
  );
}

export default LatestUpdate;
