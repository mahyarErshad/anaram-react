import React from "react";
import { ReactComponent as ButtonIcon } from "../../../assets/images/icons/carousel-button-arrow.svg";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "../../../Components/Carousel/carousel.css";

// import required modules
import { Navigation, FreeMode } from "swiper";
import ProductCard from "../../../Components/ProductCards/ProductCard/ProductCard";

function NestedCarousel() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className="container mt-[5.625rem] gap-7">
      <div className="flex w-full justify-between items-center">
        <div className="flex-center">
          <h3 className="text-xl text-NeutralN500 font-bold">
            ویترین <strong className="text-primary6">آنارام</strong>
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
        slidesPerView={"auto"}
        spaceBetween={16}
        modules={[Navigation, FreeMode]}
        freeMode={true}
        className="mySwiper"
      >
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default NestedCarousel;
