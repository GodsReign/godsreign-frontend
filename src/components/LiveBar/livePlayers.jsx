import React from "react";

function LivePlayers(props) {
  const { img, index } = props;
  return (
    <li className="list__item">
      <img src={img} alt="gods" id={index}></img>
    </li>
  );
}

export default LivePlayers;
