import React from "react";
import SingleProductOfferTimeCounter from "../SingleProductTabSection/Components/SingleProductOfferTimeCounter/SingleProductOfferTimeCounter";

function SingleProductOfferSection() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex-col gap-[0.375rem]">
        <span className="text-sm text-NeutralN500 font-semibold">پیشنــهاد</span>
        <span className="text-sm text-Magenta font-semibold">شگفت انگــیز</span>
      </div>
      <div className="flex-center gap-2">
        <SingleProductOfferTimeCounter number={3} text="ثانیه" />
        <SingleProductOfferTimeCounter number={26} text="دقیقه" />
        <SingleProductOfferTimeCounter number={17} text="ساعت" />
        <SingleProductOfferTimeCounter number={2} text="روز" />
      </div>
    </div>
  );
}

export default SingleProductOfferSection;
