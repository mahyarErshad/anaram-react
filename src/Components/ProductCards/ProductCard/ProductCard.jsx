import React from "react";
import styles from "../style/productCard.module.css"
import batteryImage from "../../../assets/images/data/product-card/battery.png";
import ProductCardPriceSection from "../ProductCardComponents/ProductCardPriceSection/ProductCardPriceSection";
import PrimaryButton from "../../Utils/Buttons/PrimaryButton/PrimaryButton";
import { ReactComponent as CartIcon } from "../../../assets/images/icons/bag-icon.svg";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/heart-icon.svg";
import { ReactComponent as CompareArrowsIcon } from "../../../assets/images/icons/compare-arrows.svg";
import SmallButton from "../../Utils/Buttons/SmallButton/SmallButton";
import ProductCardRatingSection from "../ProductCardComponents/ProductCardRatingSection/ProductCardRatingSection";
import ProductCardDiscountSection from "../ProductCardComponents/ProductCardDiscountSection/ProductCardDiscountSection";
import ProductCardTitleSection from "../ProductCardComponents/ProductCardTitleSection/ProductCardTitleSection";
import ProductCardTimeCounter from "../ProductCardComponents/ProductCardTimeCounter/ProductCardTimeCounter";

function ProductCard() {
  return (
    <figure className={`${styles.card} pt-3 pb-[0.875rem] relative px-3 rounded-lg bg-white border border-NeutralN30 flex flex-col cursor-pointer transition-all duration-300`}>
      <div className="flex-center h-2/4 mb-4 relative">
        <img className="mt-5 transition-all duration-300" src={batteryImage} alt="battery" />
        <ProductCardDiscountSection percentage={50} />
        <ProductCardRatingSection rating={4.5} />
      </div>
      <ProductCardTitleSection title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" />
      <div className="flex justify-between items-center w-full mb-3">
        <ProductCardPriceSection price={200000} discountText />
        <ProductCardPriceSection price={100000} />
      </div>
      <div className="flex-center gap-1 w-full mb-3">
        <PrimaryButton addToCartButton text="افزودن به سبد" icon={<CartIcon className="w-4 h-4" stroke="white" />} />
        <SmallButton className="p-2 bg-NeutralN20" icon={<HeartIcon />} />
        <SmallButton className="p-2 bg-NeutralN20" icon={<CompareArrowsIcon />} />
      </div>
      <div className="flex-center gap-0 bg-NeutralN20 rounded-[4px] py-1 mb-1">
      <ProductCardTimeCounter number={6} text="ثانیه" />
      <ProductCardTimeCounter number={24} text="دقیقه" />
      <ProductCardTimeCounter number={12} text="ساعت" />
      <ProductCardTimeCounter number={2} text="روز" />
      </div>
    </figure>
  );
}

export default ProductCard;
