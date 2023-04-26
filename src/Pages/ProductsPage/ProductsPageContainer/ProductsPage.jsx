import React from "react";
import ProductsPageFilters from "../ProductsPageFilters/ProductsPageFilters";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCards from "../../MainPage/MainPageBlog/BlogCards";
import { FreeMode } from "swiper";

function ProductsPage() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <section className="w-full max-lg:px-4 mx-auto max-w-[101.5625rem] flex justify-center gap-6 pt-12 pb-24">
      <ProductsPageFilters />
      <div className="bg-green-500 h-screen flex-grow pt-6">
        <Swiper slidesPerView="auto" spaceBetween={34} modules={[FreeMode]} freeMode className="mySwiper">
          {arr.map((_, index) => (
            <SwiperSlide key={index}>
              <BlogCards />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductsPage;
