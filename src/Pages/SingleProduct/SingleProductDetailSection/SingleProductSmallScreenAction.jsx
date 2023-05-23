import React from "react";
import PrimaryButton from "../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import { ReactComponent as CartIcon } from "../../../assets/images/icons/bag-icon.svg";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";
import { ReactComponent as TomanIcon } from "../../../assets/images/icons/toman-icon-black.svg";
import DeliveryOptionCard from "./DeliveryOptionCard";
import { ReactComponent as ShopAdd } from "../../../assets/images/icons/shop-add.svg";
import SingleProductIncreaseDecreaseButton from "../../../Components/Utils/Buttons/SingleProductIncreaseDecreaseButton/SingleProductIncreaseDecreaseButton";
import { useState } from "react";

function SingleProductSmallScreenAction({ state, setState }) {
  const [isBuying, setIsBuying] = useState(false);
  return (
    <section className="w-full bg-white rounded-lg px-3 pt-5 pb-4 flex-col">
      <div className="flex justify-between items-center px-6">
        <PrimaryButton onClick={() => setIsBuying(true)} icon={<CartIcon className="stroke-white" />} text="افزودن به سبد" />
        {isBuying && <SingleProductIncreaseDecreaseButton state={state} setState={setState} />}
        <div className="flex items-center gap-2">
          <span className="text-NeutralN500 font-semibold text-lg">{separateNumberByThousand(124000 * state)}</span>
          <TomanIcon className="w-5 h-4" />
        </div>
      </div>
      <div className="flex-col justify-center items-start gap-5 pb-6 px-6 mt-5">
        <div className="flex justify-start items-center gap-2">
          <ShopAdd />
          <span className="text-sm text-Green7 font-semibold">موجود در انبار داناپیوست</span>
        </div>
        <div className="flex justify-start items-center gap-6">
          <DeliveryOptionCard text="تحویل حضوری" />
          <DeliveryOptionCard text="ارسال رایگان" />
        </div>
      </div>
    </section>
  );
}

export default SingleProductSmallScreenAction;
