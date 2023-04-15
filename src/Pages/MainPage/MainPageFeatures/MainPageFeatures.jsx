import React from "react";
import MainPageFeatureCards from "./MainPageFeatureCards";
import { ReactComponent as MedalIcon } from "../../../assets/images/main-page-features/medal.svg";
import { ReactComponent as TruckIcon } from "../../../assets/images/main-page-features/truck.svg";
import { ReactComponent as CreditCardIcon } from "../../../assets/images/main-page-features/credit-card.svg";
import { ReactComponent as CustomerSupportIcon } from "../../../assets/images/main-page-features/customer-support.svg";

function MainPageFeatures() {
  return (
    <section className="w-full max-w-[80.5rem] mx-auto bg-white rounded-[0.625rem] px-3 py-2 flex-center mt-[5.625rem]">
      <div className="flex-center max-md:gap-2 gap-0 w-full">
        <MainPageFeatureCards icon={<MedalIcon />} text="ضمانت اصلات کالا" />
        <MainPageFeatureCards icon={<TruckIcon />} text="ارسال به سراسر کشور" />
        <MainPageFeatureCards icon={<CreditCardIcon />} text="پرداخت امن" />
        <MainPageFeatureCards icon={<CustomerSupportIcon />} text="مشاوره رایگان خرید" />
      </div>
    </section>
  );
}

export default MainPageFeatures;
