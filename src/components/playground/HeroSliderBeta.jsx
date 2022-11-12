import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import videoUrls from "../dashboard/heromenu/videoUrls";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import HeroSliderCard from "../dashboard/heromenu/heroSliderCard";
import ProgressBar from "../dashboard/heromenu/progressBar";

export default function HeroSliderBeta() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(thumbsSwiper);
  const delay = 100000;
  const [isVisible, setVisible] = useState(0);

  console.log(thumbsSwiper);

  return (
    <>
      <section>
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          autoplay={{ delay: delay, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {videoUrls.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <section>
                  <HeroSliderCard videoUrls={item} />
                  {isActive ? setVisible(index) : ""}
                </section>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
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
          {videoUrls.map((item, index) => {
            return (
              <SwiperSlide
                className="tw-p-4 slider-thumbnail-container"
                key={index}
              >
                <img src={item.video} alt="" className="slider__thumbnail" />
                <div className="hero-progress-bar">
                  <ProgressBar
                    isVisible={isVisible === index ? true : false}
                    duration={delay}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
