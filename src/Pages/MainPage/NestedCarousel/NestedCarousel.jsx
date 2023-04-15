import React, { useState } from "react";
import { ReactComponent as ButtonIcon } from "../../../assets/images/icons/carousel-button-arrow.svg";
import randomizeClassName from "../../../lib/function/randomizeClasses";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
  const [swiperRef, setSwiperRef] = useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const nextButton = randomizeClassName();
  const prevButton = randomizeClassName();
  return (
    <Tabs className="container mt-[5.625rem]">
      <div className="flex w-full justify-between items-center mb-7">
        <div className="flex-center">
          <h3 className="text-xl text-NeutralN500 font-bold ml-12">
            ویترین <strong className="text-primary6">آنارام</strong>
          </h3>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>
        </div>
        <div className="flex-center gap-2">
          <button className={`carousel-button ${prevButton}`}>
            <ButtonIcon className="mirror" />
          </button>
          <button className={`carousel-button ${nextButton}`}>
            <ButtonIcon />
          </button>
        </div>
      </div>
      <TabPanel onClick={() => swiperRef.slideTo(0)} className="">
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
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
                <ProductCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TabPanel>
      <TabPanel onClick={() => swiperRef.slideTo(0)} className="">
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
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
                <ProductCard discountCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TabPanel>
    </Tabs>
  );
}

export default NestedCarousel;
