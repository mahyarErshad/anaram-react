import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./styles.css";
import { Keyboard, FreeMode, Thumbs } from "swiper";
import SmallButton from "../../../Components/Utils/Buttons/SmallButton/SmallButton";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/heart-icon.svg";
import { ReactComponent as CompareIcon } from "../../../assets/images/icons/compare-arrows.svg";
import { ReactComponent as PresentationChart } from "../../../assets/images/icons/presentation-chart.svg";
import batteryImage from "../../../assets/images/data/SingleProductSwiperImage/battery.png";

const DetailSectionImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [redHeart, setRedHeart] = useState(false);
  const arr = [...Array(10).keys()];
  const slides = arr.map((index) => (
    <SwiperSlide key={index}>
      <img src={batteryImage} alt="battery" />
    </SwiperSlide>
  ));

  return (
    <section className="flex justify-start items-start gap-3 w-1/4 max-lg:w-full max-lg:overflow-x-hidden flex-shrink">
      <div className="flex-col gap-4 h-full">
        <SmallButton onClick={() => setRedHeart(!redHeart)} className="p-3 bg-NeutralN10" icon={<HeartIcon className={`w-6 h-6 stroke-NeutralN300 ${redHeart && "animate-pulse-heart fill-red-500 stroke-red-500"}`} />} />
        <SmallButton className="p-3 bg-NeutralN10" icon={<CompareIcon className="w-6 h-6" />} />
        <SmallButton className="p-3 bg-NeutralN10" icon={<PresentationChart />} />
      </div>
      <div className="w-full relative">
        <Swiper style={{ "--swiper-pagination-color": "transparent" }} spaceBetween={10} keyboard={{ enabled: true }} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[Keyboard, FreeMode, Thumbs]} className="swiper-single-product-large-image">
          {slides}
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} slidesPerView="auto" freeMode modules={[FreeMode, Thumbs]} className="swiper-single-product cursor-pointer">
          {slides}
        </Swiper>
      </div>
    </section>
  );
};

export default DetailSectionImage;
