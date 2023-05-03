import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./styles.css";
import { FreeMode, Thumbs } from "swiper";
import SmallButton from "../../../Components/Utils/Buttons/SmallButton/SmallButton";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/heart-icon.svg";
import { ReactComponent as CompareIcon } from "../../../assets/images/icons/compare-arrows.svg";
import { ReactComponent as PresentationChart } from "../../../assets/images/icons/presentation-chart.svg";
import batteryImage from "../../../assets/images/data/SingleProductSwiperImage/battery.png";

function SingleProductImageSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const arr = Array.from(Array(10).keys());
  const slides = arr.map((index) => (
    <SwiperSlide key={index}>
      <img src={batteryImage} alt="battery" />
    </SwiperSlide>
  ));
  return (
    <section className="flex justify-start items-center gap-3">
      <div className="flex-col gap-4 h-full">
        <SmallButton className="p-3 bg-NeutralN10 group" icon={<HeartIcon className="group-hover:scale-110 duration-300 w-6 h-6" />} />
        <SmallButton className="p-3 bg-NeutralN10 group" icon={<CompareIcon className="group-hover:scale-110 duration-300 w-6 h-6" />} />
        <SmallButton className="p-3 bg-NeutralN10 group" icon={<PresentationChart className="group-hover:scale-110 duration-300" />} />
      </div>
      <div className="w-full">
        <Swiper style={{ "--swiper-pagination-color": "transparent" }} spaceBetween={10} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[FreeMode, Thumbs]} className="swiper-single-product-large-image">
          {slides}
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} slidesPerView="auto" freeMode={true} modules={[FreeMode, Thumbs]} className="swiper-single-product cursor-pointer">
          {slides}
        </Swiper>
      </div>
    </section>
  );
}

export default SingleProductImageSection;
