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
const CommonSlider = () => {
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    const curWindow=()=>{if (window.innerWidth < 760) {
      setSlides(1);
    }
    if (window.innerWidth > 760) {
      setSlides(3);
      }
    }
    curWindow();
  });

  return (
    <Swiper
      className="tw-text-white"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={20}
      slidesPerView={slides}
      navigation
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      scrollbar={{ draggable: true, color: "white" }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="tw-p-12">
        Slide 2
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa
          alias illum impedit neque. Magnam provident dolor, laboriosam error,
          id ipsum ratione alias ad veritatis nobis, numquam dicta suscipit
          doloremque?
        </p>
      </SwiperSlide>

    </Swiper>
  );
};

export default CommonSlider;
