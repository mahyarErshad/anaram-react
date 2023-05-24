import React from "react";
import BreadCrumbs from "../../../Components/BreadCrumb/BreadCrumb";
import DetailSectionImage from "./DetailSectionImage";
import DetailSectionTextSection from "./DetailSectionTextSection";
import DetailSectionAction from "./DetailSectionAction";
import SingleProductOfferSection from "./SingleProductOfferSection";

function SingleProductDetailSection({ state, setState }) {
  return (
    <section className="large-container px-6 pt-6 pb-8 flex-col gap-4">
      <BreadCrumbs />
      <SingleProductOfferSection className="lg:hidden bg-NeutralN10 p-4" />
      <div className="flex gap-4 max-lg:flex-col">
        <DetailSectionImage />
        <DetailSectionTextSection state={state} setState={setState} />
        <DetailSectionAction state={state} />
      </div>
    </section>
  );
}

export default SingleProductDetailSection;
