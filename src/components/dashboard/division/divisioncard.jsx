import React, { useState } from "react";
import { motion } from "framer-motion";
function DivisionCard(props) {
  //console.log(props.item);
  const { division_background, division_logo, division_img } = props.item;
  const [move, setMove] = useState(false);
  return (
    <section
      className="division-card "
      onMouseOver={() => setMove(true)}
      onMouseOut={() => setMove(false)}
    >
      <img
        className={move ? " tw-blur-sm tw-rounded-xl" : "tw-rounded-xl"}
        src={move ? division_background : division_img}
        alt="division_img"
      />
      <motion.div
        animate={{ y: move ? -150 : 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.7 }}
        className="division__logo"
      >
        <img src={division_logo} alt="" />
      </motion.div>
    </section>
  );
}

export default DivisionCard;
