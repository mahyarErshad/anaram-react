import React from "react";
import ProductCardDiscountSection from "../../../../Components/ProductCards/ProductCardComponents/ProductCardDiscountSection/ProductCardDiscountSection";
import ProductCardPriceSection from "../../../../Components/ProductCards/ProductCardComponents/ProductCardPriceSection/ProductCardPriceSection";
import ProductCardRatingSection from "../../../../Components/ProductCards/ProductCardComponents/ProductCardRatingSection/ProductCardRatingSection";
import ProductCardTitleSection from "../../../../Components/ProductCards/ProductCardComponents/ProductCardTitleSection/ProductCardTitleSection";
import PrimaryButton from "../../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import SmallButton from "../../../../Components/Utils/Buttons/SmallButton/SmallButton";
import batteryImage from "../../../../assets/images/data/product-card/battery.png";
import { ReactComponent as CartIcon } from "../../../../assets/images/icons/bag-icon.svg";
import { ReactComponent as HeartIcon } from "../../../../assets/images/icons/heart-icon.svg";
import { ReactComponent as CompareArrowsIcon } from "../../../../assets/images/icons/compare-arrows.svg";
import styles from "./styles.module.css";

function ProductsPageCards({ discountCard, outOfStock }) {
  const discountSection = discountCard && <ProductCardDiscountSection percentage={50} />;
  const priceSection = (
    <div className={`flex ${discountCard ? "justify-between" : "justify-end"} items-center w-full mb-3`}>
      {discountCard && <ProductCardPriceSection price={200000} discountText />}
      <ProductCardPriceSection price={100000} />
    </div>
  );
  return (
    <figure className={`${styles.card} ${discountCard && styles.after} ${outOfStock && "grayscale"} pt-3 pb-[0.875rem] max-sm:w-full sm:max-w-[15.75rem] relative px-3 rounded-lg bg-white border border-NeutralN30 grid max-sm:grid-cols-2 grid-cols-1 cursor-pointer transition-all duration-300`}>
      <ProductCardRatingSection position="top-3 left-2" rating={4.5} />
      <div className="flex-center h-full mb-4">
        <img className="mt-5 transition-all duration-300" src={batteryImage} alt="battery" />
        {discountSection}
      </div>
      <ProductCardTitleSection title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" />
      {priceSection}
      <div className="flex-center gap-1 w-full">
        <PrimaryButton className="flex-grow" addToCartButton text={outOfStock ? "تمام شد" : "افزودن به سبد"} icon={<CartIcon className="w-4 h-4" stroke="white" />} />
        <SmallButton className="p-2 bg-NeutralN20" icon={<HeartIcon />} />
        <SmallButton className="p-2 bg-NeutralN20" icon={<CompareArrowsIcon />} />
      </div>
    </figure>
  );
}

export default ProductsPageCards;
