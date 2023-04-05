import React from "react";
import batteryImage from "../../../assets/images/data/product-card/battery.png";
import { ReactComponent as StarIcon } from "../../../assets/images/icons/product-card-star.svg";
import styles from "../style/productCard.module.css";
import ProductCardPriceSection from "../ProductCardComponents/ProductCardPriceSection/ProductCardPriceSection";
import PrimaryButton from "../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import { ReactComponent as CartIcon } from "../../../assets/images/icons/bag-icon.svg";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/heart-icon.svg";
import SmallButton from "../../Utils/Buttons/SmallButton/SmallButton";

function ProductCardWithDiscount() {
  return (
    <figure className=" pt-3 pb-[0.875rem] px-3 rounded-lg bg-white border border-NeutralN30 flex flex-col">
      <div className="flex-center h-2/4 mb-4 relative">
        <img className="object-contain" src={batteryImage} alt="battery" />
        <span className={`${styles["discount-percentage"]} text-white absolute -top-1 -right-1 h-[2.1875rem] w-[2.1875rem] flex-center text-[0.8125rem] font-normal`}>۵۰٪</span>
        <div className="absolute -top-1 -left-1 flex-center gap-[0.125rem]">
          <span className="font-semibold text-xs text-primary6 translate-y-[0.0625rem]">۴.۵</span>
          <StarIcon />
        </div>
      </div>
      <figcaption className="text-xs font-semibold max-w-[11rem] leading-[1.125rem] text-NeutralN600 mb-4">باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی</figcaption>
      <div className="flex justify-between items-center w-full mb-3">
        <ProductCardPriceSection price="۱۰۲,۰۰۰" discountText />
        <ProductCardPriceSection price="۱۰۲,۰۰۰" />
      </div>
      <div className="flex-center gap-1 w-full">
        <PrimaryButton addToCartButton text="افزودن به سبد" icon={<CartIcon className="w-4 h-4" stroke="white" />} />
        <SmallButton className="p-2" icon={<HeartIcon />} />
      </div>
    </figure>
  );
}

export default ProductCardWithDiscount;
