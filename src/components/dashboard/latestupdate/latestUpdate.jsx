import React from "react";

import latestCardData from "./latestCardData";
import LatestUpdateCard from "./latestUpdateCard";
function LatestUpdate() {
  return (
    <section className="latest-update">
      <header className="tw-relative latest__header">
        <h2 className="division__heading-back">Latest Update</h2>
      </header>
      <section className="tw-flex latest-update__card">
        {latestCardData.map((item, index) => (
          <LatestUpdateCard img={item.img} key={index} />
        ))}
      </section>
    </section>
  );
}

export default LatestUpdate;
