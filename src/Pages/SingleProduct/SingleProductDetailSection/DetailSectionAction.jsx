import React from "react";
import { ReactComponent as ShieldTick } from "../../../assets/images/icons/shield-tick.svg";
import { ReactComponent as ShopAdd } from "../../../assets/images/icons/shop-add.svg";
import DeliveryOptionCard from "./DeliveryOptionCard";

function DetailSectionAction() {
  return (
    <section className="justify-self-end bg-NeutralN10 border border-NeutralN10 rounded-2xl pt-10 pb-6 px-6 flex-col gap-7 min-w-[24.375rem]">
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
    </section>
  );
}

export default DetailSectionAction;
