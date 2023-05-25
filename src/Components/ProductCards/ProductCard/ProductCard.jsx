import React, { useEffect, useState } from "react";
import styles from "../style/productCard.module.css";
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
import { Link } from "react-router-dom";
import goToTop from "../../../lib/function/goToTop";

const ProductCard = ({ discountCard }) => {
  const [redHeart, setRedHeart] = useState(false);
  const [numbers, setNumbers] = useState({
    seconds: 3,
    minutes: 26,
    hours: 17,
    days: 2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prevNumbers) => {
        let updatedSeconds = prevNumbers.seconds - 1;
        let updatedMinutes = prevNumbers.minutes;
        let updatedHours = prevNumbers.hours;
        let updatedDays = prevNumbers.days;
        if (updatedSeconds === -1) {
          updatedMinutes -= 1;
          updatedSeconds = 59;
        }
        if (updatedMinutes === -1) {
          updatedHours -= 1;
          updatedMinutes = 59;
        }
        if (updatedHours === -1) {
          updatedDays -= 1;
          updatedHours = 23;
        }
        return {
          seconds: updatedSeconds,
          minutes: updatedMinutes,
          hours: updatedHours,
          days: updatedDays,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const discountSection = discountCard && <ProductCardDiscountSection percentage={50} />;
  const priceSection = (
    <div className={`flex ${discountCard ? "justify-between" : "justify-end"} items-center w-full mb-3`}>
      {discountCard && <ProductCardPriceSection price={200000} discountText />}
      <ProductCardPriceSection price={100000} />
    </div>
  );
  function handleButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <Link onClick={goToTop} to="products/product/id-1234">
      <figure className={`${styles.card} ${discountCard && styles.after} pt-3 pb-[0.875rem] relative px-3 rounded-lg bg-white border border-NeutralN30 flex-col cursor-pointer transition-all duration-300`}>
        <div className="flex-center h-2/4 mb-4 relative">
          <img className="mt-5 transition-all duration-300" src={batteryImage} alt="battery" />
          {discountSection}
          <ProductCardRatingSection rating={4.5} />
        </div>
        <ProductCardTitleSection title="باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی" />
        {priceSection}
        <div onClick={handleButtonClick} className="flex-center gap-1 w-full">
          <PrimaryButton addToCartButton text="افزودن به سبد" icon={<CartIcon className="w-4 h-4" stroke="white" />} />
          <SmallButton onClick={() => setRedHeart(!redHeart)} className="p-3 bg-NeutralN10" icon={<HeartIcon className={`stroke-NeutralN300 ${redHeart && "animate-pulse-heart fill-red-500 stroke-red-500"}`} />} />
          <SmallButton className="p-2 bg-NeutralN20" icon={<CompareArrowsIcon />} />
        </div>
        {discountCard && (
          <div className="flex-center gap-0 bg-NeutralN20 rounded-[4px] py-1 mb-1 mt-3">
            <ProductCardTimeCounter number={numbers.seconds} text="ثانیه" />
            <ProductCardTimeCounter number={numbers.minutes} text="دقیقه" />
            <ProductCardTimeCounter number={numbers.hours} text="ساعت" />
            <ProductCardTimeCounter number={numbers.days} text="روز" />
          </div>
        )}
      </figure>
    </Link>
  );
};

export default ProductCard;
