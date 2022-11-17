import React, { useEffect, useRef, useState } from "react";
import LiveBarModal from "./LiveBarModal";

function LivePlayers(props) {
  const displayRef = useRef();
  const { img, index } = props;
  const [isVisible, setVisible] = useState(false);
  let timer;
  const addModal = (e) => {
    setVisible(true);
  };
  const removeModal = () => {
    //console.log("out");
    timer = setTimeout(() => (isVisible ? setVisible(false) : null), 5000);
  };
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <section className="" onClick={addModal} onMouseOut={removeModal}>
      <li className="list__item tw-relative">
        <img src={img} alt="gods" id={index}></img>
        <span className="tw-absolute tw-top-6 tw-left-7 tw-text-sm">🔴</span>
      </li>
      <div
        className={
          isVisible
            ? "livebar__modal livebar__modal__display"
            : "livebar__modal tw-hidden"
        }
      >
        <LiveBarModal />
      </div>
    </section>
  );
}

export default LivePlayers;
