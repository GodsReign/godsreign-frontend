import React, { useState } from "react";
function CustomVideoPlayer(props) {
  const [play, setPlay] = useState(false);
  const handlePlayPause = (e) => {
    if (play === true) {
      e.target.play();
    }
    if (play === false) {
      e.target.pause();
    }
    setPlay((play) => (play ? false : true));
  };
  return (
    <div className="video video--large tw-relative">
      <video
        src={props.video}
        width={props.width}
        height={props.height}
        onClick={handlePlayPause}
      ></video>
      {play && <button className="icon icon--small play__btn"></button>}
    </div>
  );
}

export default CustomVideoPlayer;
