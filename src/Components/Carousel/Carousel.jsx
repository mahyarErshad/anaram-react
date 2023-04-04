import React, { useState } from "react";
import { ReactComponent as PercentageIcon } from "../../assets/images/icons/percentage-icon.svg";

function Carousel() {
  const [swiperRef, setSwiperRef] = useState(null);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <section className="container mt-[5.625rem]">
      <div className="flex w-full justify-between items-center">
        <div className="flex-center gap-2">
          <PercentageIcon />
          <h3 className="text-xl text-NeutralN500 font-bold">
            تخفیفات این هفته <strong className="text-primary6">آنارام</strong>
          </h3>
        </div>
        <div>
          <button onClick={prevHandler} className="main-slider-button-prev flex-center">
            sdfsdfgsfd
          </button>
          <div className="swiper-pagination flex-center cursor-pointer"></div>
          <button onClick={nextHandler} className="main-slider-button-next flex-center">
            sfgsdgfsd
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
