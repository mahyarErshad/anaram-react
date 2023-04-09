import React from "react";
import { ReactComponent as ButtonIcon } from "../../../assets/images/icons/carousel-button-arrow.svg";
import randomizeClassName from "../../../lib/function/randomizeClasses";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "../../../Components/Carousel/carousel.css";
import styles from "./styles.module.css"

// import required modules
import { Navigation, FreeMode } from "swiper";
import ProductCard from "../../../Components/ProductCards/ProductCard/ProductCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function NestedCarousel() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const nextButton = randomizeClassName();
  const prevButton = randomizeClassName();
  return (
    <Tabs className="container mt-[5.625rem] gap-7">
      <div className="flex justify-between items-center w-full">
        <div className="flex-center gap-12 mr-2">
          <h3 className="text-xl text-NeutralN500 font-bold">
            ویترین <strong className="text-primary6">آنارام</strong>
          </h3>
          <div>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>
          </div>
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
      <TabPanel>
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
                <ProductCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
}

export default NestedCarousel;
