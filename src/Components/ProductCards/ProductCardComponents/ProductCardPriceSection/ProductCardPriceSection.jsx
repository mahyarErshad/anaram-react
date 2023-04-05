import React from "react";
import { ReactComponent as TomanIconBlack } from "../../../../assets/images/icons/toman-icon-black.svg";
import { ReactComponent as TomanIconGray } from "../../../../assets/images/icons/toman-icon-gray.svg";

function ProductCardPriceSection({ discountText }) {
  const textStyles = discountText ? "text-NeutralN90  text-[0.75rem]" : "text-NeutralN700 text-sm";
  return (
    <span className={`${textStyles} flex-center gap-1 font-semibold`}>
      ۱۰۲,۰۰۰
      {

        discountText ? <TomanIconGray className="w-[0.9375rem] h-[0.6875rem] -translate-y-[0.125rem]" /> : <TomanIconBlack className="w-[0.9375rem] h-[0.6875rem] -translate-y-[0.125rem]" />
      }
    </span>
  );
}

export default ProductCardPriceSection;
