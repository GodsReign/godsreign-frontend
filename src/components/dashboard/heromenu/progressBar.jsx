import React from "react";
import { motion } from "framer-motion";

const ProgressBar = (props) => {
  //console.log(props.isVisible);
  const width = props.isVisible ? 110 : 0;
  const opacity = props.isVisible ? 1 : 0.2;
  const backgroundColor = props.isVisible ? "" : "#fff";
  const Parentdiv = {
    height: 5,
    width: "11rem",
    backgroundColor,
    opacity: opacity,
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    backgroundColor: "#dda34e",
    borderRadius: 40,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv} className="progress__bar__container">
      <motion.div
        animate={{ width: width }}
        transition={{ width: { from: 0, duration: props.duration / 1000 } }}
        style={Childdiv}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
