import React from "react";
import MainPageFeatureCards from "./MainPageFeatureCards";
import { ReactComponent as MedalIcon } from "../../../assets/images/main-page-features/medal.svg";
import { ReactComponent as TruckIcon } from "../../../assets/images/main-page-features/truck.svg";

function MainPageFeatures() {
  return (
    <section className="container bg-white rounded-[0.625rem] py-2 px-3 flex-center gap-0 mt-[5.625rem]">
      <MainPageFeatureCards icon={<MedalIcon />} text="ضمانت اصلات کالا" />
    </section>
  );
}

export default MainPageFeatures;
