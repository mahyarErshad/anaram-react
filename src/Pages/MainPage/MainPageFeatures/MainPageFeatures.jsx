import React from "react";
import MainPageFeatureCards from "./MainPageFeatureCards";
import { ReactComponent as MedalIcon } from "../../../assets/images/main-page-features/medal.svg";
import { ReactComponent as TruckIcon } from "../../../assets/images/main-page-features/truck.svg";
import { ReactComponent as CreditCardIcon } from "../../../assets/images/main-page-features/credit-card.svg";
import { ReactComponent as CustomerSupportIcon } from "../../../assets/images/main-page-features/customer-support.svg";

const features = [
  { icon: <MedalIcon />, text: "ضمانت اصلات کالا" },
  { icon: <TruckIcon />, text: "ارسال به سراسر کشور" },
  { icon: <CreditCardIcon />, text: "پرداخت امن" },
  { icon: <CustomerSupportIcon />, text: "مشاوره رایگان خرید" },
];

function MainPageFeatures({ className }) {
  return (
    <section className={`w-full mx-auto bg-white rounded-[0.625rem] px-3 py-2 flex-center ${className}`}>
      <div className="flex-center max-md:gap-2 gap-0 w-full">
        {features.map((feature, index) => (
          <MainPageFeatureCards key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </section>
  );
}

export default MainPageFeatures;
