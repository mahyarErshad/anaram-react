import React from "react";
import { ReactComponent as PercentageIcon } from "../../../assets/images/icons/percentage-icon.svg";

function DiscountSection() {
  return (
    <section className="container mt-[5.625rem]">
      <div className="flex w-full justify-between items-center">
        <div className="flex-center gap-[0.625rem]">
          <PercentageIcon />
          <h3 className="text-2xl text-NeutralN500">
            تخفیفات این هفته <span className="text-primary6">آنارام</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default DiscountSection;
