import React from "react";
import MainPageSlider from "../MainPageSlider/MainPageSlider";
import BatteryCategories from "../BatteryCategories/BatteryCategories";
import OtherProducts from "../OtherProducts/OtherProducts";
import Carousel from "../../../Components/Carousel/Carousel";
import { ReactComponent as PercentageIcon } from "../../../assets/images/icons/percentage-icon.svg";
import AnaramAssistant from "../AnaramAssistant/AnaramAssistantContainer/AnaramAssistant";
import MainPageSmallBanners from "../MainPageSmallBanners/MainPageSmallBanners";
import deliveryBanner from "../../../assets/images/delivery-banner.png";
import deliveryBannerSM from "../../../assets/images/delivery-banner-sm.png";
import NestedCarousel from "../NestedCarousel/NestedCarousel";
import MainPageBlog from "../MainPageBlog/MainPageBlog";
import MainPageFeatures from "../MainPageFeatures/MainPageFeatures";
import CallToAction from "../CallToAction/CallToAction";
import BatteryChargingComponent from "../../../Components/BatteryChargingComponent/BatteryChargingComponent";

const MainPageWrapper = () => (
  <main>
    <MainPageSlider />
    <BatteryCategories />
    <OtherProducts />
    <Carousel title="تخفیفات این هفته" icon={<PercentageIcon />} discountCard />
    <AnaramAssistant />
    <MainPageSmallBanners />
    <Carousel title="پر فروش ترین محصولات" icon={<PercentageIcon />} />
    <img className="w-full max-md:hidden rounded-2xl container mt-20" src={deliveryBanner} alt="Free delivery for customers" />
    <img className="w-full md:hidden rounded-2xl container mt-8" src={deliveryBannerSM} alt="Free delivery for customers" />
    <NestedCarousel />
    <MainPageBlog />
    <MainPageFeatures />
    <CallToAction />
    <BatteryChargingComponent />
  </main>
);

export default MainPageWrapper;
