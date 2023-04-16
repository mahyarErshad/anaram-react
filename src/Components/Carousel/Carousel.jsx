import React from "react";
import { ReactComponent as ButtonIcon } from "../../assets/images/icons/carousel-button-arrow.svg";
import ProductCard from "../ProductCards/ProductCard/ProductCard";
import randomizeClassName from "../../lib/function/randomizeClasses";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./carousel.css";

// import required modules
import { Navigation, FreeMode } from "swiper";

function Carousel(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const nextButton = randomizeClassName();
  const prevButton = randomizeClassName();
  return (
    <section className="container mt-[5.625rem] gap-7">
      <div className="flex w-full max-lg:justify-center lg:justify-between items-center">
        <div className="flex-center gap-2">
          {props.icon}
          <h3 className="text-xl text-NeutralN500 font-bold">
            {props.title} <strong className="text-primary6">آنارام</strong>
          </h3>
        </div>
        <div className="flex-center gap-2 max-lg:hidden">
          <button className={`carousel-button ${prevButton}`}>
            <ButtonIcon className="mirror" />
          </button>
          <button className={`carousel-button ${nextButton}`}>
            <ButtonIcon />
          </button>
        </div>
      </div>
      <Swiper
        navigation={{
          nextEl: `.${nextButton}`,
          prevEl: `.${prevButton}`,
        }}
        slidesPerView={"auto"}
        spaceBetween={16}
        modules={[Navigation, FreeMode]}
        freeMode={true}
        className="mySwiper"
      >
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductCard discountCard={props.discountCard} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Carousel;
