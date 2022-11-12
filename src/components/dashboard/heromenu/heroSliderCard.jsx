import React from "react";
import { motion } from "framer-motion";

function HeroSliderCard(props) {
  // console.log(props);
  //ref={props.myref}>
  const { videoUrls } = props;
  return (
    <motion.div className="tw-flex tw-items-center slider ">
      <header>
        <span className="token token--greyscale">{videoUrls.game}</span>
        <section className="tw-pb-8 tw-pt-8 ">
          <h2 className="carousel__heading">{videoUrls.heading}</h2>
          <p className="carousel__content">{videoUrls.content}</p>
        </section>
        <button className="btn btn--primary btn--gradient btn--large slider__btn tw-rounded-lg">
          <span>Read More</span>
          <span className="btn--background">
            <img className="btn__arrow" src={"images/greater.svg"} alt="" />
          </span>
        </button>
      </header>

      <img className="slider__video" src={videoUrls.video} alt="" />
    </motion.div>
  );
}

export default HeroSliderCard;
