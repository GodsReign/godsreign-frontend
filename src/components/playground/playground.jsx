import React from "react";
import video from "../../assets/video.png";
import "./playground.css";
import videoUrls from "../dashboard/videoUrls";
const Playground = () => {
  return (
    <div className="container tw-flex tw-items-center tw-text-white slider">
      <header>
        <button className="btn token token--greyscale">Pokemon Unite</button>
        <section className="tw-pb-8 tw-pt-8">
          <h2 className="carousel__heading">
            Taiwan Excellence Gaming Cup 2022
          </h2>
          <p className="carousel__content">
            Pokémon Unite team have successfully Qualified for Taiwan Excellence
            <br />
            Gaming Cup 2022
          </p>
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
        <img className="" src={video} alt="" />
      </span>
    </div>
  );
};

export default Playground;
