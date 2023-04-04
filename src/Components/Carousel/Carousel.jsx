import React from "react";
import { ReactComponent as PercentageIcon } from "../../assets/images/icons/percentage-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as ButtonIcon } from "../../assets/images/icons/carousel-button-arrow.svg";

// Import Swiper styles
import "swiper/css";
import "./carousel.css";

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
      <Swiper>
        <SwiperSlide>sfsgdfgd</SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Carousel;
