import React from "react";
import banner1 from "../../../assets/images/data/small-banners/banner1.jpg";
import banner2 from "../../../assets/images/data/small-banners/banner2.jpg";

const MainPageSmallBanners = () => {
  const imageClassName = "rounded-2xl cursor-pointer";
  return (
    <section className="w-full max-w-[82.5rem] px-4 mx-auto max-lg:mt-12 lg:mt-[6.5rem] bg-transparent grid max-md:grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
      <img className={imageClassName} src={banner1} alt="Banner 1" />
      <img className={imageClassName} src={banner2} alt="Banner 2" />
    </section>
  );
};

export default MainPageSmallBanners;
