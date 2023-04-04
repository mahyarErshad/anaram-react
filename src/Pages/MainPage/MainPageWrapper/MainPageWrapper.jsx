import React from "react";
import MainPageSlider from "../MainPageSlider/MainPageSlider";
import BatteryCategories from "../BatteryCategories/BatteryCategories";
import OtherProducts from "../OtherProducts/OtherProducts";
import Carousel from "../../../Components/Carousel/Carousel";

function MainPageWrapper() {
  return (
    <>
      <MainPageSlider />
      <BatteryCategories />
      <OtherProducts />
      <Carousel />
    </>
  );
}

export default MainPageWrapper;
