import React from "react";
import BlogCards from "./BlogCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

function MainPageBlog() {
  const arr = [1, 2, 3, 4];
  return (
    <section className="container flex-center max-lg:mt-16 mt-[5.625rem] gap-6">
      <h2 className="font-bold text-xl text-NeutralN500">
        مجله <strong className="text-primary6">آنارام</strong>
      </h2>
      <Swiper slidesPerView={"auto"} spaceBetween={24} modules={[FreeMode]} freeMode={true} className="mySwiper">
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <BlogCards />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default MainPageBlog;
