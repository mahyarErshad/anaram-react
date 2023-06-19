import React from "react";
import { ReactComponent as TomanIcon } from "../../../assets/images/icons/toman-icon-black.svg";
import { ReactComponent as GrayToman } from "../../../assets/images/icons/toman-icon-gray.svg";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";

const ActionSectionQuantity = ({ title, quantity, toman, counter, hasDiscount, discountedPrice, percentage, className }) => {
  return (
    <div className={`flex justify-between items-center gap-2 pb-6 border-b border-NeutralN30 last-of-type:border-none ${className}`}>
      <span className="text-NeutralN500 font-medium text-base">{title}</span>
      <div className="flex-center gap-4">
        {hasDiscount && <span className="discount-percentage-icon text-white h-[2.1875rem] w-[2.1875rem] flex-center text-[0.8125rem] font-normal">{separateNumberByThousand(percentage)}٪</span>}
        <div className="flex-col">
          {hasDiscount && (
            <div className="flex justify-end items-center gap-2">
              <span className="relative lineThrough text-sm">{discountedPrice}</span>
              <GrayToman className="w-4 h-3" />
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-NeutralN500 font-semibold text-lg">{separateNumberByThousand(quantity)}</span>
            {toman && <TomanIcon className="w-5 h-4" />}
            {counter && <span className="text-sm text-NeutralN500 font-semibold">عدد</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionSectionQuantity;
