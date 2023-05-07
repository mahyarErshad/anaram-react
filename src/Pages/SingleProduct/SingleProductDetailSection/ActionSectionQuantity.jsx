import React from "react";
import { ReactComponent as Toman } from "../../../assets/images/icons/toman-icon-black.svg";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";

function ActionSectionQuantity({ title, quantity, toman }) {
  return (
    <div className="flex justify-between items-center pb-6 border-b border-NeutralN30">
      <span className="text-NeutralN500 font-semibold text-base">{title}</span>
      <div className="flex-center gap-2">
        <span className="text-NeutralN500 font-semibold text-lg">{separateNumberByThousand}</span>
        {toman && <Toman className="w-5 h-4" />}
      </div>
    </div>
  );
}

export default ActionSectionQuantity;