// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../App.css";
import { useState, useEffect } from "react";
import DivisionCard from "./divisioncard";
import divisionCardData from "./divisionCardData";
const DivisionSlider = () => {
  const [slides, setSlides] = useState(4);
  useEffect(() => {
    const curWindow = () => {
      if (window.innerWidth < 760) {
        setSlides(1);
      }
      if (window.innerWidth > 760) {
        setSlides(4);
      }
    };
    curWindow();
  });

  return (
    <Swiper
      className="tw-text-white"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={10}
      slidesPerView={slides}
      navigation
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      scrollbar={{ draggable: true, color: "white" }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}
    >
      {" "}
      {divisionCardData.map((item, index) => {
        return (
          <SwiperSlide className="tw-pb-12" key={index}>
            <DivisionCard />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DivisionSlider;
