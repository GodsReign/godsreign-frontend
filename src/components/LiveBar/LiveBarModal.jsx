import React from "react";

function LiveBarModal() {
  return (
    <section className="livebar__player__modal tw-text-white">
      <img
        className="player__modal__img"
        src="images/live_player.png"
        alt="live_now"
      />

      <section className="player__modal__content">
        <h4 className="tw-uppercase tw-whitespace-nowrap">
          Gods - <span className="name__gold">Vibhor</span>
        </h4>
        <p className="tw-opacity-80 tw-mb-1">133k Watching</p>
        <button className="btn token token--greyscale ">Watch now</button>
      </section>
    </section>
  );
}

export default LiveBarModal;