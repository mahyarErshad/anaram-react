import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import BatteryCategoriesData from "../../../lib/BatteryCategories/BatteryCategoriesData";
import ProductsPageBatteryCategoryCard from "./ProductsPageBatteryCategoryCard";

function ProductsPageBatteryCategory() {
  return (
    <div className="w-full px-2">
      <Swiper slidesPerView="auto" spaceBetween={28} modules={[FreeMode]} freeMode className="mySwiper">
        {BatteryCategoriesData.map((item, index) => (
          <SwiperSlide style={{backgroundColor: "transparent"}} key={index}>
            <ProductsPageBatteryCategoryCard active={item.active} image={item.image} text={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductsPageBatteryCategory;
