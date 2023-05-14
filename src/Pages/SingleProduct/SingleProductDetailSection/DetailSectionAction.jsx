import React, { useState } from "react";
import { ReactComponent as ShieldTick } from "../../../assets/images/icons/shield-tick.svg";
import { ReactComponent as ShopAdd } from "../../../assets/images/icons/shop-add.svg";
import DeliveryOptionCard from "./DeliveryOptionCard";
import ActionSectionQuantity from "./ActionSectionQuantity";
import PrimaryButton from "../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import { ReactComponent as CartIcon } from "../../../assets/images/icons/bag-icon.svg";
import { Link } from "react-router-dom";
import SingleProductOfferTimeCounter from "../SingleProductTabSection/Components/SingleProductOfferTimeCounter/SingleProductOfferTimeCounter";

const DetailSectionAction = ({ state }) => {
  const [addToCart, setAddToCart] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(true);
  const handleClick = () => {
    setAddToCart((prev) => !prev);
    setHasDiscount((prev) => !prev);
  };
  return (
    <section className={`justify-self-end relative bg-NeutralN10 border border-NeutralN10 rounded-2xl ${hasDiscount ? "pt-2 discount-red-flag" : "pt-10"} pb-6 px-6 flex-col gap-7 min-w-[24.375rem]`}>
      {hasDiscount && (
        <div className="flex justify-between items-center w-full">
          <div className="flex-col gap-[0.375rem]">
            <span className="text-sm text-NeutralN500 font-semibold">پیشنــهاد</span>
            <span className="text-sm text-Magenta font-semibold">شگفت انگــیز</span>
          </div>
          <div className="flex-center gap-2">
            <SingleProductOfferTimeCounter number={3} text="ثانیه" />
            <SingleProductOfferTimeCounter number={26} text="دقیقه" />
            <SingleProductOfferTimeCounter number={17} text="ساعت" />
            <SingleProductOfferTimeCounter number={2} text="روز" />
          </div>
        </div>
      )}
      <div className="flex justify-start items-center gap-2 pb-6 border-b border-NeutralN30">
        <ShieldTick />
        <span className="text-sm text-NeutralN100">گارانتی و تضمین اصالت کالا</span>
      </div>
      <div className="flex-col justify-center items-start gap-5 pb-6 border-b border-NeutralN30">
        <div className="flex justify-start items-center gap-2">
          <ShopAdd />
          <span className="text-sm text-Green7 font-semibold">موجود در انبار داناپیوست</span>
        </div>
        <div className="flex justify-start items-center gap-6">
          <DeliveryOptionCard text="تحویل حضوری" />
          <DeliveryOptionCard text="ارسال رایگان" />
        </div>
      </div>
      <ActionSectionQuantity title="قیمت محصول :" quantity={124000} toman hasDiscount={hasDiscount} discountedPrice={248000} />
      <ActionSectionQuantity title="تعداد سفارش :" quantity={state} counter />
      <ActionSectionQuantity title="قیمت نهایی محصولات :" quantity={state * 124000} toman />
      {!addToCart && <PrimaryButton onClick={handleClick} icon={<CartIcon className="stroke-white" />} text="افزودن به سبد" />}
      {addToCart && (
        <div className="flex justify-between items-center h-full">
          <span className="text-Green6 text-sm font-semibold">به سبد خرید افزوده شد</span>
          <Link onClick={handleClick} className="text-primary6 text-sm font-semibold" to="/products/product/id-1234">
            مشاهده سبد خرید
          </Link>
        </div>
      )}
    </section>
  );
};

export default DetailSectionAction;
