import React, { useState } from "react";
import videoUrls from "../dashboard/videoUrls";
function Slider() {
  const [curIndex, setCurIndex] = useState(0);

  // useEffect(() => {
  //   setTimeout(
  //     () => setCurIndex((curIndex) => (curIndex < 2 ? curIndex + 1 : 0)),
  //     30000
  //   );

  //   // console.log(curIndex);
  // });
  const handleClick = (index) => {
    setCurIndex(index);
  };

  return (
    <div className="container tw-flex tw-flex-col tw-text-white slider">
      <section className="tw-flex tw-items-center slider ">
        <header>
          <button className="btn token token--greyscale">Pokemon Unite</button>
          <section className="tw-pb-8 tw-pt-8">
            <h2 className="carousel__heading">
              Taiwan Excellence Gaming Cup 2022
            </h2>
            <p className="carousel__content">
              Pokémon Unite team have successfully Qualified for Taiwan
              Excellence
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
          <img
            className="slider__video"
            src={videoUrls[curIndex].video}
            alt=""
          />
        </span>
      </section>
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

export default Slider;