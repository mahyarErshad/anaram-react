import React from "react";
import MainPageSlider from "../MainPageSlider/MainPageSlider";
import BatteryCategories from "../BatteryCategories/BatteryCategories";
import OtherProducts from "../OtherProducts/OtherProducts";

function MainPageWrapper() {
  return (
    <>
      <MainPageSlider />
      <BatteryCategories />
      <OtherProducts />
    </>
  );
}

export default MainPageWrapper;
