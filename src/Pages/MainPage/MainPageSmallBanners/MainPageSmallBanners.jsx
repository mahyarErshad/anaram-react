import React from "react";
import banner1 from "../../../assets/images/data/small-banners/banner1.jpg";
import banner2 from "../../../assets/images/data/small-banners/banner2.jpg";

function MainPageSmallBanners() {
  const imageClassName = "rounded-2xl lg:max-w-[40.5rem] cursor-pointer";
  return (
    <section className="w-full max-w-[82.5rem] mx-auto mt-[6.5rem] bg-transparent flex-center gap-6">
      <img className={imageClassName} src={banner1} alt="Banner for advertising batteries for customers" />
      <img className={imageClassName} src={banner2} alt="Banner for advertising batteries for customers" />
    </section>
  );
}

export default MainPageSmallBanners;
