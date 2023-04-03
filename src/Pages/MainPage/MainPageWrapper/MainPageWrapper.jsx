import React from "react";
import MainPageSlider from "../MainPageSlider/MainPageSlider";
import BatteryCategories from "../BatteryCategories/BatteryCategories";
import OtherProductsCards from "../OtherProducts/OtherProductsCards";

function MainPageWrapper() {
  return (
    <>
      <MainPageSlider />
      <BatteryCategories />
      <OtherProductsCards />
    </>
  );
}

export default MainPageWrapper;
