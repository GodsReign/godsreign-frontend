import React from "react";
import ReactPlayer from "react-player/lazy";

function videoPlayer(props) {
  return (
    <div className="video">
      <ReactPlayer
        url={props.video}
        width={props.width}
        height={props.height}
        controls
        className={props.videoType}
        playIcon={
          <button className="icon icon--small play__react__btn"></button>
        }
        light={props.img}
      />
    </div>
  );
}

export default videoPlayer;
