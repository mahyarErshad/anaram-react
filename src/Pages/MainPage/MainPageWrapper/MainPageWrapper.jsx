import React from "react";
import MainPageSlider from "../MainPageSlider/MainPageSlider";
import BatteryCategories from "../BatteryCategories/BatteryCategories";
import OtherProducts from "../OtherProducts/OtherProducts";
import DiscountSection from "../DiscountSection/DiscountSection";

function MainPageWrapper() {
  return (
    <>
      <MainPageSlider />
      <BatteryCategories />
      <OtherProducts />
      <DiscountSection />
    </>
  );
}

export default MainPageWrapper;
