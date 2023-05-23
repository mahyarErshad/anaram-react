import React from "react";
import BreadCrumbs from "../../../Components/BreadCrumb/BreadCrumb";
import DetailSectionImage from "./DetailSectionImage";
import DetailSectionTextSection from "./DetailSectionTextSection";
import DetailSectionAction from "./DetailSectionAction";
import { useState } from "react";
import SingleProductSmallScreenAction from "./SingleProductSmallScreenAction";

function SingleProductDetailSection() {
  const [state , setState] = useState(1)
  return (
    <section className="large-container px-6 pt-6 pb-8 flex-col gap-4">
      <BreadCrumbs />
      <div className="flex gap-4 max-lg:flex-col">
        <DetailSectionImage />
        <DetailSectionTextSection state={state} setState={setState} />
        <DetailSectionAction state={state} />
        <SingleProductSmallScreenAction />
      </div>
    </section>
  );
}

export default SingleProductDetailSection;
