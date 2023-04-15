import React from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/arrow-icon-to-left.svg";
import image from "../../../assets/images/data/product-card/battery.png";

function HeaderShoppingCartModal() {
  return (
    <div className="flex flex-col absolute left-0 top-12 bg-white border border-NeutralN10 rounded-2xl z-10">
      <div className="p-4 flex justify-between items-center w-full">
        <span className="text-[0.5625rem] text-NeutralN60">۳ محصول</span>
        <div className="flex-center gap-3 text-primary6">
          <span className="text-xs font-semibold">مشاهده سبد خرید</span>
          <ArrowIcon />
        </div>
      </div>
      <figure className="flex gap-3 py-5 pr-3 pl-6 border-y border-NeutralN20 w-full">
        <img src={image} alt="" />
        <div></div>
      </figure>
    </div>
  );
}

export default HeaderShoppingCartModal;
