import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./styles.css";

// import required modules
import { FreeMode, Thumbs } from "swiper";
import SmallButton from "../../../Components/Utils/Buttons/SmallButton/SmallButton";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/heart-icon.svg";
import { ReactComponent as CompareIcon } from "../../../assets/images/icons/compare-arrows.svg";
import { ReactComponent as PresentationChart } from "../../../assets/images/icons/presentation-chart.svg";

function SingleProductImageSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flex justify-start items-center gap-3">
      <div className="flex-col gap-4 h-full">
        <SmallButton className="p-3 bg-NeutralN10 group" icon={<HeartIcon className="group-hover:scale-110 duration-300" />} />
        <SmallButton className="p-3 bg-NeutralN10 group" icon={<CompareIcon className="group-hover:scale-110 duration-300" />} />
        <SmallButton className="p-3 bg-NeutralN10 group" icon={<PresentationChart className="group-hover:scale-110 duration-300" />} />
      </div>
      <div className="w-full">
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Thumbs]}
          className="swiper-single-product2"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Thumbs]} className="swiper-single-product">
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default SingleProductImageSection;
