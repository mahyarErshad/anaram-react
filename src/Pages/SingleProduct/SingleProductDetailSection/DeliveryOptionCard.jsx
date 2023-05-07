import React from "react";
import { ReactComponent as DoubleCheck } from "../../../assets/images/icons/double-check-icon.svg";

function DeliveryOptionCard({ text }) {
  return (
    <div className="bg-NeutralN20 rounded-2xl flex-center gap-1 py-2 pr-1 pl-3">
      <DoubleCheck />
      <span className="text-xs text-NeutralN80 font-semibold">{text}</span>
    </div>
  );
}

export default DeliveryOptionCard;
