import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import "./playground.css";
import CustomVideoPlayer from "../videoPlayer/CustomVideoPlayer";
import LiveBarModal from "../LiveBar/LiveBarModal";

const Playground = () => {
  return (
    // <section className="top_slider">
    //   <Splide
    //     hasTrack={false}
    //     options={{
    //       rewind: true,
    //       gap: "1rem",
    //       perPage: 2,
    //     }}
    //     className="section"
    //     aria-label="My Favorite Images"
    //   >
    //     <SplideTrack>
    //       {utilSLide.map(({ content }, index) => {
    //         return (
    //           <SplideSlide key={index}>
    //             <section className="content_slide">
    //               <span>{content}</span>
    //             </section>
    //           </SplideSlide>
    //         );
    //       })}
    //     </SplideTrack>
    //     <button className="splide__toggle" type="button">
    //       <span className="splide__toggle__play">Play</span>
    //       <span className="splide__toggle__pause">Pause</span>
    //     </button>
    //   </Splide>
    // </section>
    <div>
      <div className="playground container tw-relative">

      </div>
      <div>
        <LiveBarModal />
      </div>
    </div>
  );
};

export default Playground;
