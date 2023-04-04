import React from "react";
import { ReactComponent as PercentageIcon } from "../../assets/images/icons/percentage-icon.svg";
import { ReactComponent as ButtonIcon } from "../../assets/images/icons/carousel-button-arrow.svg";

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
          <button className="flex-center">
            <ButtonIcon className="mirror" />
          </button>
          <button className="flex-center">
            <ButtonIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
