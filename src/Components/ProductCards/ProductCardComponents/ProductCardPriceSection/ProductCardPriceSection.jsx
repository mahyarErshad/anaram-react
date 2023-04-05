import React from "react";
import { ReactComponent as TomanIcon } from "../../../../assets/images/icons/toman-icon.svg";

function ProductCardPriceSection({discountText}) {
    const textStyles = discountText ? "text-[0.75rem]" : "text-NeutralN700 text-sm"
  return (
    <span className="flex-center gap-[0.125rem] font-semibold">
      ۱۰۲,۰۰۰
      <TomanIcon className="w-[0.9375rem] h-[0.6875rem] -translate-y-[0.125rem]" />
    </span>
  );
}

export default ProductCardPriceSection;
