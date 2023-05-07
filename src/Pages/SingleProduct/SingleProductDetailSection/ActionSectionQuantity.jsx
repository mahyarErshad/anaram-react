import React from "react";
import { ReactComponent as Toman } from "../../../assets/images/icons/toman-icon-black.svg";

function ActionSectionQuantity({ title, quantity, toman }) {
  return (
    <div className="flex justify-between items-center pb-6 border-b border-NeutralN30">
      <span className="text-NeutralN500 font-semibold text-base">{title}</span>
      <div className="flex-center gap-2">
        <span className="text-NeutralN500 font-semibold text-base">{quantity}</span>
        {toman && <Toman />}
      </div>
    </div>
  );
}

export default ActionSectionQuantity;
