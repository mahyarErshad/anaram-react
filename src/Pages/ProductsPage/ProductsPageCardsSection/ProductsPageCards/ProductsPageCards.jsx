import React from "react";
import ProductCardDiscountSection from "../../../../Components/ProductCards/ProductCardComponents/ProductCardDiscountSection/ProductCardDiscountSection";
import ProductCardPriceSection from "../../../../Components/ProductCards/ProductCardComponents/ProductCardPriceSection/ProductCardPriceSection";
import ProductCardRatingSection from "../../../../Components/ProductCards/ProductCardComponents/ProductCardRatingSection/ProductCardRatingSection";
import ProductCardTitleSection from "../../../../Components/ProductCards/ProductCardComponents/ProductCardTitleSection/ProductCardTitleSection";
import PrimaryButton from "../../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import SmallButton from "../../../../Components/Utils/Buttons/SmallButton/SmallButton";

function ProductsPageCards() {
  const discountSection = discountCard && <ProductCardDiscountSection percentage={50} />;
  const priceSection = (
    <div className={`flex ${discountCard ? "justify-between" : "justify-end"} items-center w-full mb-3`}>
      {discountCard && <ProductCardPriceSection price={200000} discountText />}
      <ProductCardPriceSection price={100000} />
    </div>
  );
  return (
    <figure className={`${styles.card} ${discountCard && styles.after} pt-3 pb-[0.875rem] relative px-3 rounded-lg bg-white border border-NeutralN30 flex flex-col cursor-pointer transition-all duration-300`}>
      <div className="flex-center h-2/4 mb-4 relative">
        <img className="mt-5 transition-all duration-300" src={batteryImage} alt="battery" />
        {discountSection}
        <ProductCardRatingSection rating={4.5} />
      </div>
      <ProductCardTitleSection title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" />
      {priceSection}
      <div className="flex-center gap-1 w-full">
        <PrimaryButton addToCartButton text="افزودن به سبد" icon={<CartIcon className="w-4 h-4" stroke="white" />} />
        <SmallButton className="p-2 bg-NeutralN20" icon={<HeartIcon />} />
        <SmallButton className="p-2 bg-NeutralN20" icon={<CompareArrowsIcon />} />
      </div>
    </figure>
  );
}

export default ProductsPageCards;
