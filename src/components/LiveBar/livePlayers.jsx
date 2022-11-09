import React from "react";
import LiveBarModal from "./LiveBarModal";

function LivePlayers(props) {
  const { img, index } = props;

  return (
    <section className="">
      <li className="list__item">
        <img src={img} alt="gods" id={index}></img>
      </li>
      <div className="livebar__modal">
        <LiveBarModal/>
      </div>
  </section>
  );
}

export default LivePlayers;
