import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay, EffectFade } from "swiper";

export default function LatestVideoSlider({ latestVideoData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //console.log(thumbsSwiper);
  const delay = 10000;
  //console.log(thumbsSwiper);
  const [addplay, setPlay] = useState(null);
  //console.log(addplay);
  return (
    <>
      <section >
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{ delay: delay, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {latestVideoData.map((item, index) => (
            <SwiperSlide key={index}>
              <section>
                <img
                  className="video video--large"
                  src={item.img}
                  alt={item.heading}
                />
                <button className="icon icon--large btn__center play__btn"></button>
              </section>
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
                  className="tw-p-4 slider-thumbnail-container "
                  key={index}
                  onMouseOver={() => setPlay(index)}
                  onMouseOut={() => setPlay(null)}
                >
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="video video--small"
                  />
                  {addplay === index ? (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, effect: "tween" }}
                      className="icon icon--small play__btn btn__center tw-translate-x-28"
                    ></motion.button>
                  ) : (
                    ""
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </section>
    </>
  );
}
