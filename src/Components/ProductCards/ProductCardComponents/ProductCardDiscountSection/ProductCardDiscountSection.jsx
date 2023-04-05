import React from "react";
import styles from "../../style/productCard.module.css";
import convertToPersianDigits from "../../../../lib/function/convertToPersianDigits"

function ProductCardDiscountSection({ percentage }) {
  return <span className={`${styles["discount-percentage"]} text-white absolute -top-1 -right-1 h-[2.1875rem] w-[2.1875rem] flex-center text-[0.8125rem] font-normal`}>{convertToPersianDigits(percentage)}٪</span>;
}

export default ProductCardDiscountSection;
