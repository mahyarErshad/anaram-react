import React from "react";
import ProductsPageFilters from "../ProductsPageFilters/ProductsPageFilters";
import stage from "../../../assets/images/data/battery-categories/stage.png";
import image from "../../../assets/images/data/battery-categories/black.png";

function ProductsPage() {
  return (
    <section className="w-full max-lg:px-4 mx-auto max-w-[101.5625rem] flex justify-center gap-6 pt-12 pb-24">
      <ProductsPageFilters />
      <div className="bg-green-500 h-screen flex-grow pt-6">
        <figure className="group flex-center flex-col cursor-pointer max-lg:mt-6 bg-NeutralN20 w-[12rem] py-4 rounded-2xl">
          <img className="mb-2 group-hover:-translate-y-1 max-h-[5.75rem] object-contain transition-all duration-300" src={image} alt="" />
          <img className="mb-3" src={stage} alt="stage for batteries" />
          <figcaption className="text-NeutralN300 text-base">باتری قلمی</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ProductsPage;
