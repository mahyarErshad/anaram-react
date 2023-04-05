import React from "react";
import { ReactComponent as PercentageIcon } from "../../assets/images/icons/percentage-icon.svg";
import { ReactComponent as ButtonIcon } from "../../assets/images/icons/carousel-button-arrow.svg";
import ProductCardWithDiscount from "../ProductCards/ProductCardWithDiscount/ProductCardWithDiscount";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";

// import required modules
import { Navigation } from "swiper";

function Carousel() {
  return (
    <section className="container mt-[5.625rem] gap-7">
      <div className="flex w-full justify-between items-center">
        <div className="flex-center gap-2">
          <PercentageIcon />
          <h3 className="text-xl text-NeutralN500 font-bold">
            تخفیفات این هفته <strong className="text-primary6">آنارام</strong>
          </h3>
        </div>
        <div className="flex-center gap-2">
          <button className="carousel-button-prev flex-center">
            <ButtonIcon className="mirror" />
          </button>
          <button className="carousel-button-next flex-center">
            <ButtonIcon />
          </button>
        </div>
      </div>
      <Swiper
        navigation={{
          nextEl: ".carousel-button-next",
          prevEl: ".carousel-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
      <br />
      <ProductCardWithDiscount />
    </section>
  );
}

export default Carousel;
