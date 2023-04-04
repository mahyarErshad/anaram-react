import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { Autoplay, Pagination, Keyboard } from "swiper";

// image imports
import xbox from "../../../assets/images/Sliders/Xbox.jpg";
import light1 from "../../../assets/images/Sliders/light1.jpg";
import light2 from "../../../assets/images/Sliders/light2.jpg";
import { ReactComponent as PrevIcon } from "../../../assets/images/icons/prev-icon.svg";

export default function MainPageSlider() {
  const images = [xbox, light1, light2];
  const [swiperRef, setSwiperRef] = useState(null);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <>
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        rewind={true}
        modules={[Pagination, Keyboard, Autoplay]}
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
          <button onClick={prevHandler} className="main-slider-button-prev flex-center">
            <PrevIcon />
          </button>
          <div className="swiper-pagination flex-center cursor-pointer"></div>
          <button onClick={nextHandler} className="main-slider-button-next flex-center">
            <PrevIcon className="mirror" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
