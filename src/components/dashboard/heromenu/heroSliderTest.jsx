import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay, EffectFade } from "swiper";
import videoUrls from "./videoUrls";
import HeroSliderCard from "./heroSliderCard";
import ProgressBar from "./progressBar";

const HeroSliderTest = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //console.log(thumbsSwiper);
  const delay = 10000;
  const [isVisible, setVisible] = useState(0);

  //console.log(thumbsSwiper);

  return (
    <>
      <section className="hero__slider__container">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: delay, disableOnInteraction: false }}
          speed={1000}
          spaceBetween={2}
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
          effect="fade"
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs,]}
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
};

export default HeroSliderTest;
