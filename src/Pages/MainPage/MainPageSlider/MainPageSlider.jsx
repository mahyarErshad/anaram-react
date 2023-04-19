import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Keyboard, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./slider.css";
import xbox from "../../../assets/images/Sliders/Xbox.jpg";
import light1 from "../../../assets/images/Sliders/light1.jpg";
import light2 from "../../../assets/images/Sliders/light2.jpg";
import { ReactComponent as PrevIcon } from "../../../assets/images/icons/prev-icon.svg";

SwiperCore.use([Autoplay, Pagination, Keyboard, Navigation]);

const images = [xbox, light1, light2];

const MainPageSlider = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Pagination, Keyboard, Navigation]}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: ".main-slider-button-next",
          prevEl: ".main-slider-button-prev",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        rewind={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Anaram Slider number ${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="pagination-navigation-wrapper w-fit flex-center gap-2">
          <button className="main-slider-button-next flex-center">
            <PrevIcon />
          </button>
          <div className="swiper-pagination flex-center cursor-pointer"></div>
          <button className="main-slider-button-prev flex-center">
            <PrevIcon className="mirror" />
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default MainPageSlider;
