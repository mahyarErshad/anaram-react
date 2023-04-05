import React from "react";
import batteryImage from "../../../assets/images/data/product-card/battery.png";
import styles from "../style/productCard.module.css"

function ProductCardWithDiscount() {
  return (
    <figure className=" pt-3 pb-[0.875rem] px-3 rounded-lg bg-white border border-NeutralN30 flex flex-col">
      <div className="flex-center h-2/4 mb-4">
        <img className="object-contain" src={batteryImage} alt="battery" />

      </div>
    </figure>
  );
}

export default ProductCardWithDiscount;
