import React from "react";
import batteryImage from "../../../assets/images/data/product-card/battery.png";
import starIcon from "../../../assets/images/icons/product-card-star.svg";
import styles from "../style/productCard.module.css";

function ProductCardWithDiscount() {
  return (
    <figure className=" pt-3 pb-[0.875rem] px-3 rounded-lg bg-white border border-NeutralN30 flex flex-col">
      <div className="flex-center h-2/4 mb-4 relative">
        <img className="object-contain" src={batteryImage} alt="battery" />
        <span className={`${styles["discount-percentage"]} text-white absolute -top-1 -right-1 h-[2.1875rem] w-[2.1875rem] flex-center text-[0.8125rem] font-normal`}>۵۰٪</span>
      </div>
    </figure>
  );
}

export default ProductCardWithDiscount;
