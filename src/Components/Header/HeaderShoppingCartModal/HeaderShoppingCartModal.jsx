import React from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/arrow-icon-to-left.svg";
import image from "../../../assets/images/data/product-card/battery.png";
import SideBySideProductCard from "../../ProductCards/SideBySideProductCard/SideBySideProductCard";

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
      <SideBySideProductCard image={image} title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" price={102000} />
      <SideBySideProductCard image={image} title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" price={102000} />
    </div>
  );
}

export default HeaderShoppingCartModal;
