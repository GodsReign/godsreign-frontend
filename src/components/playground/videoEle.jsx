import React from "react";

import videoData from "../videoPlayer/videoData";
import "./playground.css";
import VideoPlayer from "../videoPlayer/videoPlayer";
function videoEle() {
  return (
    <div className="container latest__video">
      <VideoPlayer
        video={videoData[0].url}
        width={"1108px"}
        height={"560px"}
        videoType={"video--large"}
        img={videoData[0].img}
      />
      <div className="latest__video__bottom latest__video__bottom--primary">
        <h3>Watch More</h3>
      </div>
    </div>
  );
}

export default videoEle;
