import React from "react";
import LatestVideoSlider from "./latestVideoSlider";
import SectionHeader from "../sectionHeader";
import latestVideoData from "./latestVideoData";
function LatestVideo() {
  return (
    <div className="latest-video--container">
      <SectionHeader text={"Latest Video"} />
      <LatestVideoSlider latestVideoData={latestVideoData} />
    </div>
  );
}

export default LatestVideo;
