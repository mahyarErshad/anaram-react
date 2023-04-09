import React from "react";
import MainPageSlider from "../MainPageSlider/MainPageSlider";
import BatteryCategories from "../BatteryCategories/BatteryCategories";
import OtherProducts from "../OtherProducts/OtherProducts";
import Carousel from "../../../Components/Carousel/Carousel";
import { ReactComponent as PercentageIcon } from "../../../assets/images/icons/percentage-icon.svg";
import AnaramAssistant from "../AnaramAssistant/AnaramAssistantContainer/AnaramAssistant";
import MainPageSmallBanners from "../MainPageSmallBanners/MainPageSmallBanners";
import deliveryBanner from "../../../assets/images/delivery-banner.png";
import NestedCarousel from "../NestedCarousel/NestedCarousel";
import MainPageBlog from "../MainPageBlog/MainPageBlog";
import MainPageFeatures from "../MainPageFeatures/MainPageFeatures";
import CallToAction from "../CallToAction/CallToAction";

function MainPageWrapper() {
  return (
    <main className="pb-8">
      <MainPageSlider />
      <BatteryCategories />
      <OtherProducts />
      <Carousel title="تخفیفات این هفته" icon={<PercentageIcon />} discountCard />
      <AnaramAssistant />
      <MainPageSmallBanners />
      <Carousel title="پر فروش ترین محصولات" icon={<PercentageIcon />} />
      <img className="w-full rounded-2xl container mt-20" src={deliveryBanner} alt="Free delivery for customers" />
      <NestedCarousel />
      <MainPageBlog />
      <MainPageFeatures />
      <CallToAction />
    </main>
  );
}

export default MainPageWrapper;
