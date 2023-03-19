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
import xbox from "../../../assets/images/Sliders/Xbox.jpg";
import light1 from "../../../assets/images/Sliders/light1.jpg";
import light2 from "../../../assets/images/Sliders/light2.jpg";

export default function MainPageSlider() {
  const images = [xbox, light1, light2];
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        rewind={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt={`Anaram Slider number ${index + 1}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
