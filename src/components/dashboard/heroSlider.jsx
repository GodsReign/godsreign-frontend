import React, { useState, useEffect } from "react";
import videoUrls from "./videoUrls";
import { motion } from "framer-motion";
function HeroSlider() {
  const [curIndex, setCurIndex] = useState(0);
  const [delayAni, setDelayAni] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setDelayAni(1.5);
      setCurIndex((curIndex) => (curIndex < 2 ? curIndex + 1 : 0));
    }, 5000);

    // console.log(curIndex);
  });
  const handleClick = (index) => {
    setCurIndex(index);
  };
  //console.log(videoUrls);
  return (
    <div className="container tw-flex tw-flex-col tw-text-white slider">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="tw-flex tw-items-center slider "
      >
        <header>
          <button className="btn token token--greyscale">
            {videoUrls[curIndex].game}
          </button>
          <section className="tw-pb-8 tw-pt-8 ">
            <h2 className="carousel__heading">{videoUrls[curIndex].heading}</h2>
            <p className="carousel__content">{videoUrls[curIndex].content}</p>
          </section>
          <button className="btn btn--primary btn--gradient btn--large slider__btn tw-rounded-lg">
            <label htmlFor="arrow">Read More</label>
            <span className="btn--background">
              <img
                className="btn__arrow"
                src={require("../../assets/greater.svg").default}
                alt=""
              />
            </span>
          </button>
        </header>
        <span className="slider__video">
          <img
            className="slider__video"
            src={videoUrls[curIndex].video}
            alt=""
          />
        </span>
      </motion.div>
      <div className="tw-flex tw-pt-8">
        {videoUrls.map((item, index) => {
          return (
            <div className="tw-p-4" key={index}>
              <img
                src={item.video}
                onClick={() => handleClick(index)}
                alt=""
                className={
                  videoUrls[curIndex].id === index
                    ? "slider__active slider__thumbnail"
                    : "slider__thumbnail"
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSlider;
