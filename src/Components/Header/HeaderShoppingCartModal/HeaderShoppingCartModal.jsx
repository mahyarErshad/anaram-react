import React from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/arrow-icon-to-left.svg";
import image from "../../../assets/images/data/product-card/battery-yellow.png";
import SideBySideProductCard from "../../ProductCards/SideBySideProductCard/SideBySideProductCard";
import PrimaryButton from "../../Utils/Buttons/PrimaryButton/PrimaryButton";
import ProductCardPriceSection from "../../ProductCards/ProductCardComponents/ProductCardPriceSection/ProductCardPriceSection";
import styles from "./styles.module.css";

function HeaderShoppingCartModal() {
  return (
    <div className="flex flex-col absolute left-0 top-12 bg-white border border-NeutralN10 rounded-2xl z-10">
      <div className="p-4 flex justify-between items-center w-full">
        <span className="text-[0.5625rem] text-NeutralN60">۳ محصول</span>
        <div className="flex-center gap-3 text-primary6">
          <span className="text-xs font-semibold">مشاهده سبد خرید</span>
          <ArrowIcon />
        </div>
      </div>
      <SideBySideProductCard image={image} title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" price={150000} amount={2} />
      <SideBySideProductCard image={image} title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" price={102000} discountedPrice={80000} amount={3} discountCard />
      <SideBySideProductCard image={image} title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" price={250000} amount={4} />
      <div className="py-5 pr-6 pl-4 flex justify-between flex-wrap">
        <PrimaryButton className="py-4 px-[3.125rem]" text="ثبت سفارش" />
        <div className={`${styles["price-section"]} flex flex-col gap-4`}>
          <span className="text-[0.5625rem] font-semibold text-NeutralN100">مبلغ قابل پرداخت</span>
          <ProductCardPriceSection price={502000} />
        </div>
      </div>
    </div>
  );
}

export default HeaderShoppingCartModal;
