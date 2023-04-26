import React from "react";
import ProductsPageFilters from "../ProductsPageFilters/ProductsPageFilters";

function ProductsPage() {
  return (
    <section className="w-full max-lg:px-4 mx-auto max-w-[101.5625rem] flex justify-center gap-6 pt-12 pb-24">
      <ProductsPageFilters />
      <div className="bg-green-500 h-screen flex-grow pt-6">

      </div>
    </section>
  );
}

export default ProductsPage;
