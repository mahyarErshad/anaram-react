import React from "react";
import { ReactComponent as TomanIcon } from "../../../assets/images/icons/toman-icon-black.svg";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";

const ActionSectionQuantity = ({ title, quantity, toman, counter, hasDiscount }) => {
  return (
    <div className="flex justify-between items-center pb-6 border-b border-NeutralN30 last-of-type:border-none">
      <span className="text-NeutralN500 font-medium text-base">{title}</span>
      <div className="flex items-center gap-2">
        <div className="flex-col justify-center items-end">
        
          <span className="text-NeutralN500 font-semibold text-lg">{separateNumberByThousand(quantity)}</span>
        </div>
        {toman && <TomanIcon className="w-5 h-4" />}
        {counter && <span className="text-sm text-NeutralN500 font-semibold">عدد</span>}
      </div>
    </div>
  );
};

export default ActionSectionQuantity;
