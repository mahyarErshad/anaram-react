import React from "react";
import { separateNumberByThousand } from "../../../../../lib/function/convertToPersianDigits";

const SingleProductOfferTimeCounter = ({ number, text }) => {
  const formattedNumber = separateNumberByThousand(number).padStart(2, "0");
  return (
    <div className={`flex-col gap-2 items-center`}>
      <span className="text-sm font-semibold text-Magenta bg-NeutralN20 py-2 px-3 rounded-5px h-10 w-10 flex-center">{formattedNumber}</span>
      <span className="text-[0.5625rem] text-NeutralN100 font-semibold transition-all duration-300">{text}</span>
    </div>
  );
};

export default SingleProductOfferTimeCounter;
