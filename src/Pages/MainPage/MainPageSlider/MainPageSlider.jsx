import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

// import required modules
import { Autoplay, Pagination, Keyboard, Navigation } from "swiper";

// image imports
import xbox from "../../../assets/images/Sliders/Xbox.jpg";
import light1 from "../../../assets/images/Sliders/light1.jpg";
import light2 from "../../../assets/images/Sliders/light2.jpg";
import { ReactComponent as PrevIcon } from "../../../assets/images/icons/prev-icon.svg";

export default function MainPageSlider() {
  const images = [xbox, light1, light2];
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: ".main-slider-button-next",
          prevEl: ".main-slider-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        rewind={true}
        modules={[Pagination, Keyboard, Autoplay, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt={`Anaram Slider number ${index + 1}`} />
            </SwiperSlide>
          );
        })}
        <div className="pagination-navigation-wrapper w-fit flex-center gap-2">
          <button className="main-slider-button-prev flex-center">
            <PrevIcon />
          </button>
          <div className="swiper-pagination flex-center cursor-pointer"></div>
          <button className="main-slider-button-next flex-center">
            <PrevIcon className="mirror" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
