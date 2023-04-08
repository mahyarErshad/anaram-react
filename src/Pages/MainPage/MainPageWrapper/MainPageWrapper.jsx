import React from "react";
import MainPageSlider from "../MainPageSlider/MainPageSlider";
import BatteryCategories from "../BatteryCategories/BatteryCategories";
import OtherProducts from "../OtherProducts/OtherProducts";
import Carousel from "../../../Components/Carousel/Carousel";
import { ReactComponent as PercentageIcon } from "../../../assets/images/icons/percentage-icon.svg";
import AnaramAssistant from "../AnaramAssistant/AnaramAssistantContainer/AnaramAssistant";
import MainPageSmallBanners from "../MainPageSmallBanners/MainPageSmallBanners";

function MainPageWrapper() {
  return (
    <main className="pb-8">
      <MainPageSlider />
      <BatteryCategories />
      <OtherProducts />
      <Carousel title="تخفیفات این هفته" icon={<PercentageIcon />} discountCard />
      <AnaramAssistant />
      <MainPageSmallBanners />
      <Carousel title="تخفیفات این هفته" icon={<PercentageIcon />} />
    </main>
  );
}

export default MainPageWrapper;
