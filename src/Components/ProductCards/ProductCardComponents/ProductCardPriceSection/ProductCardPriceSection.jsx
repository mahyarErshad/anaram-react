import React from "react";
import { ReactComponent as TomanIcon } from "../../../../assets/images/icons/toman-icon.svg";

function ProductCardPriceSection() {
  return (
    <span className="flex-center gap-1 text-NeutralN700 text-sm font-semibold">
      ۱۰۲,۰۰۰
      <TomanIcon />
    </span>
  );
}

export default ProductCardPriceSection;
