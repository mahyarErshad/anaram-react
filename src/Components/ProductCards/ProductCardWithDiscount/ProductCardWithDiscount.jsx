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
        <div className="absolute -top-1 -left-1 flex-center gap-[0.125rem]">
          <span className="font-semibold text-xs text-primary6 translate-y-[0.0625rem]">۴.۵</span>
          <img src={starIcon} alt="star icon" />
        </div>
      </div>
      <figcaption className="text-xs font-semibold max-w-[11rem] text-center leading-[1.125rem] text-NeutralN600">باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی</figcaption>
    </figure>
  );
}

export default ProductCardWithDiscount;
