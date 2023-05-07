import React from "react";
import BreadCrumbs from "../../../Components/BreadCrumb/BreadCrumb";
import DetailSectionImage from "./DetailSectionImage";
import DetailSectionTextSection from "./DetailSectionTextSection";

function SingleProductDetailSection() {
  return (
    <section className="large-container px-6 pt-6 pb-8 flex-col gap-4">
      <BreadCrumbs />
      <div className="grid grid-cols-3">
        <DetailSectionImage />
        <DetailSectionTextSection />
      </div>
    </section>
  );
}

export default SingleProductDetailSection;
