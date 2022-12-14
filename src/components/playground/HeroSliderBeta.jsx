import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import latestVideoData from "./latestVideoData";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import HeroSliderCard from "../dashboard/heromenu/heroSliderCard";
export default function HeroSliderBeta() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //console.log(thumbsSwiper);
  const delay = 10000;
  const [isVisible, setVisible] = useState(0);

  //console.log(thumbsSwiper);

  return (
    <>
      <section className="latest-video--container">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          autoplay={{ delay: delay, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {latestVideoData.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <section>
                  <img
                    className="video video--large"
                    src={item.img}
                    alt={item.heading}
                  />
                  <img
                    className="play__btn"
                    src="images/playbtn.svg"
                    alt="playBtn"
                  />
                  {isActive ? setVisible(index) : ""}
                </section>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <section className="latest-video--wrapper latest-video--primary">
          <h3 className="latest-video__watch">Watch Next</h3>
          <Swiper
            onSwiper={setThumbsSwiper}
            // loop={true}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              760: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              320: {
                spaceBetween: 0,
              },
            }}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {latestVideoData.map((item, index) => {
              return (
                <SwiperSlide
                  className="tw-p-4 slider-thumbnail-container"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="video video--small"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </section>
    </>
  );
}
