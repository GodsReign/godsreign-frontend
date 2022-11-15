import React, { useRef } from "react";
import LiveBarModal from "./LiveBarModal";

function LivePlayers(props) {
  const displayRef = useRef();
  const { img, index } = props;

  const addModal = () => {
    displayRef.current.classList.add("livebar__modal__display");
  };

  const removeModal = () => {
    displayRef.current.classList.remove("livebar__modal__display");
  };

  return (
    <section className="" onClick={addModal} onMouseOut={removeModal}>
      <li className="list__item">
        <img src={img} alt="gods" id={index}></img>
      </li>
      <div
        className="livebar__modal"
        ref={displayRef}
        onMouseOver={addModal}
        onMouseOut={removeModal}
      >
        <LiveBarModal />
      </div>
    </section>
  );
}

export default LivePlayers;
