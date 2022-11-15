import React from "react";
import DivisionSlider from "./divisionSlider";
import SectionHeader from "../sectionHeader";
function OurDivision() {
  return (
    <section className="division--container">
      <SectionHeader text={"Our Division"} />
      <DivisionSlider />
    </section>
  );
}

export default OurDivision;
