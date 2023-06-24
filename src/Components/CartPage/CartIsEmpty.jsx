import React from "react";
import FirstCartPageTitleRow from "./FirstCartPageTitleRow";
import image from "../../assets/images/cart-is-empty.png";
import PrimaryButton from "../Utils/Buttons/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

function CartIsEmpty({ data }) {
  return (
    <div className="flex-grow">
      <FirstCartPageTitleRow counter={data.length} />
      <div className="flex-col flex-center gap-2 rounded-2xl bg-NeutralN10 pt-16 pb-4 mt-14 mx-auto max-w-[26.5rem]">
        <img src={image} className="w-[12.5rem] h-48" alt="سبد خرید خالی است" />
        <p className="text-base text-NeutralN500">سبد خرید شما خالی است!</p>
      </div>
      <Link className="w-full max-w-[26.5rem] mt-10 mb-16 flex-center mx-auto" to="/">
        <PrimaryButton className="w-full" text="صفحه اصلی فروشگاه" />
      </Link>
    </div>
  );
}

export default CartIsEmpty;
