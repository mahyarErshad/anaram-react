import React from "react";
import { ReactComponent as PercentageIcon } from "../../../assets/images/icons/percentage-icon.svg";

function DiscountSection() {
  return (
    <section className="container mt-[5.625rem]">
      <div className="flex w-full justify-between items-center">
        <div className="flex-center gap-2">
          <PercentageIcon />
          <h3 className="text-xl text-NeutralN500 font-bold">
            تخفیفات این هفته <strong className="text-primary6">آنارام</strong>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default DiscountSection;
