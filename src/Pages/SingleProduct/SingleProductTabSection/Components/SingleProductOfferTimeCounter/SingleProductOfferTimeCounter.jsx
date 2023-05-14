import React from "react";
import { separateNumberByThousand } from "../../../../../lib/function/convertToPersianDigits";

const SingleProductOfferTimeCounter = ({ number, text }) => {
  const formattedNumber = separateNumberByThousand(number).padStart(2, "0");
  return (
    <div className={`flex-col justify-between items-center h-full w-1/4 border-r border-NeutralN30`}>
      <span className="text-xs font-semibold text-Magenta">{formattedNumber}</span>
      <span className="text-[0.5rem] text-NeutralN50 transition-all duration-300">{text}</span>
    </div>
  );
};

export default SingleProductOfferTimeCounter;
