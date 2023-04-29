import React from "react";
import ProductsPageFilters from "../ProductsPageFilters/ProductsPageFilters";
import ProductsPageBatteryCategory from "../ProductsPageBatteryCategory/ProductsPageBatteryCategory";
import ProductsPageCardsSection from "../ProductsPageCardsSection/ProductsPageCardsSection";

function ProductsPage() {
  return (
    <section className="w-full max-w-[82.5rem] px-4 pt-12 pb-24 mx-auto">
      <ProductsPageFilters />
      <div className="w-full flex-grow pt-6">
        <ProductsPageBatteryCategory />
        <ProductsPageCardsSection />
      </div>
    </section>
  );
}

export default ProductsPage;
