import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import video from "../../assets/video.png";
function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const videoUrls = [
    { video, heading: "Pokemon Unite" },
    { video, heading: "Volarant" },
    { video, heading: "Fire Fire" },
  ];
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {videoUrls.map((item, index) => {
        return (
          <Carousel.Item>
            <div className="d-flex w-100 carousel">
              <header>
                <button className="btn token token--greyscale">
                  {item.heading}
                </button>
                <h2 className="carousel__heading">
                  Taiwan Excellence Gaming Cup 2022
                </h2>
                <p className="carousel__content">
                  Pokémon Unite team have successfully Qualified for Taiwan
                  Excellence Gaming Cup 2022
                </p>
                <Button className="btn--primary m-2 btn-lg">
                  Read More &gt;
                </Button>
              </header>
              <span className="tw-p-12">
                <img className="" src={item.video} alt="" />
              </span>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HeroCarousel;
