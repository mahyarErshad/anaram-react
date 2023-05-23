import React from "react";
import SingleProductDetailSection from "../SingleProductDetailSection/SingleProductDetailSection";
import MainPageFeatures from "../../MainPage/MainPageFeatures/MainPageFeatures";
import SingleProductTabSection from "../SingleProductTabSection/SingleProductTabSection";
import SingleProductSmallScreenAction from "../SingleProductDetailSection/SingleProductSmallScreenAction";
import MainPageFeaturesSmallScreens from "../SingleProductDetailSection/MainPageFeaturesSmallScreens";
import { useState } from "react";

function SingleProductPage() {
  const [state, setState] = useState(1);
  return (
    <section className="flex-col gap-6 w-full px-4 pt-10 pb-20">
      <SingleProductDetailSection state={state} setState={setState} />
      <SingleProductSmallScreenAction state={state} setState={setState} />
      <MainPageFeatures className="max-w-[102rem] max-lg:hidden" />
      <MainPageFeaturesSmallScreens />
      <SingleProductTabSection />
    </section>
  );
}

export default SingleProductPage;
