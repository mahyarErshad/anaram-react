import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper";

// image imports
import xbox from "../../../assets/images/Sliders/Xbox.jpg"

export default function MainPageSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        rewind={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
}
