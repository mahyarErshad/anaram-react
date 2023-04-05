import React from "react";
import { ReactComponent as TomanIconBlack } from "../../../../assets/images/icons/toman-icon-black.svg";
import { ReactComponent as TomanIconGray } from "../../../../assets/images/icons/toman-icon-gray.svg";
import styles from "../../style/productCard.module.css";

function ProductCardPriceSection({ discountText, price }) {
  const textStyles = discountText ? "text-NeutralN90  text-[0.75rem]" : "text-NeutralN700 text-sm";
  const iconStyles = "w-[0.9375rem] h-[0.6875rem] -translate-y-[0.125rem]";
  return (
    <span className={`${textStyles} ${discountText && styles.lineThrough} flex-center gap-1 font-semibold relative`}>
      {price}
      {discountText ? <TomanIconGray className={iconStyles} /> : <TomanIconBlack className={iconStyles} />}
    </span>
  );
}

export default ProductCardPriceSection;
