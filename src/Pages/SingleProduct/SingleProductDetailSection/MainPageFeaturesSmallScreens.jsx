import React from "react";
import { ReactComponent as MedalIcon } from "../../../assets/images/main-page-features/medal.svg";
import { ReactComponent as TruckIcon } from "../../../assets/images/main-page-features/truck.svg";
import { ReactComponent as CreditCardIcon } from "../../../assets/images/main-page-features/credit-card.svg";
import { ReactComponent as CustomerSupportIcon } from "../../../assets/images/main-page-features/customer-support.svg";
import MainPageFeatureCards from "../../MainPage/MainPageFeatures/MainPageFeatureCards";

function MainPageFeaturesSmallScreens() {
  const features = [
    { icon: <MedalIcon />, text: "ضمانت اصلات کالا" },
    { icon: <TruckIcon />, text: "ارسال به سراسر کشور" },
    { icon: <CreditCardIcon />, text: "پرداخت امن" },
    { icon: <CustomerSupportIcon />, text: "مشاوره رایگان خرید" },
  ];
  return (
    <section className="w-full flex-col gap-3 lg:hidden">
      <div className="flex-center max-md:gap-2 gap-0 w-full">
        {features.map((feature, index) => (
          <MainPageFeatureCards key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </section>
  );
}

export default MainPageFeaturesSmallScreens;
