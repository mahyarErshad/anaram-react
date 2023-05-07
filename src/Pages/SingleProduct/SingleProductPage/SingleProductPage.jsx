import React from "react";
import SingleProductDetailSection from "../SingleProductDetailSection/SingleProductDetailSection";
import MainPageFeatures from "../../MainPage/MainPageFeatures/MainPageFeatures";

function SingleProductPage() {
  return (
    <section className="flex-col gap-6 w-full px-4 pt-10 pb-20">
      <SingleProductDetailSection />
      <MainPageFeatures className="max-w-[102rem]" />
    </section>
  );
}

export default SingleProductPage;
