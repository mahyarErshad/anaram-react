import React from "react";
import styles from "../../style/productCard.module.css";
import { separateNumberByThousand } from "../../../../lib/function/convertToPersianDigits";

const ProductCardTimeCounter = ({ number, text, className }) => {
  const formattedNumber = separateNumberByThousand(number).padStart(2, "0");
  return (
    <div className={`${styles.counter} flex-col justify-between items-center h-full w-1/4 border-r border-NeutralN30 ${className}`}>
      <span className="text-xs font-semibold text-Magenta">{formattedNumber}</span>
      <span className="text-[0.5rem] text-NeutralN50 transition-all duration-300">{text}</span>
    </div>
  );
};

export default ProductCardTimeCounter;
