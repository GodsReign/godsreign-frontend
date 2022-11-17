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
// import "../../App.css";
import DivisionCard from "./divisioncard";
import divisionCardData from "./divisionCardData";
const DivisionSlider = () => {
  return (
    <Swiper
      className="tw-text-white"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        760: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        360: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
      navigation
      autoplay={{ delay: 100000, disableOnInteraction: false }}
      scrollbar={{ draggable: true, color: "white" }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}
    >
      {divisionCardData.map((item, index) => {
        return (
          <SwiperSlide className="tw-pb-12" key={index}>
            <DivisionCard item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DivisionSlider;
