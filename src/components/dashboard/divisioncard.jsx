import React, { useState } from "react";
import division_img from "../../assets/division_slider.png";
import division_logo from "../../assets/division_slider_logo.svg";
import division_blur from "../../assets/divSliderBlur.png";
import { motion } from "framer-motion";
function DivisionCard() {
  const [move, setMove] = useState(false);
  return (
    <section
      className="division-card tw-relative "
      onMouseOver={() => setMove(true)}
      onMouseOut={() => setMove(false)}
    >
      <img
        className={move ? "tw-blur-sm tw-rounded-xl" : "tw-rounded-xl"}
        src={move ? division_blur : division_img}
        alt="division_img"
      />
      <motion.div
        animate={{ y: move ? -150 : 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.7 }}
        className="division__logo tw-absolute"
      >
        <img src={division_logo} alt="" />
      </motion.div>
    </section>
  );
}

export default DivisionCard;
