import React from "react";
import BreadCrumbs from "../../../Components/BreadCrumb/BreadCrumb";
import DetailSectionImage from "./DetailSectionImage";

function SingleProductDetailSection() {
  return (
    <section className="large-container px-6 pt-6 pb-8 flex-col gap-4">
      <BreadCrumbs />
      <div className="grid grid-cols-3">
        <DetailSectionImage />
      </div>
    </section>
  );
}

export default SingleProductDetailSection;
