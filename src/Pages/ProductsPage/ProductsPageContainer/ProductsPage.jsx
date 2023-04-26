import React from "react";
import ProductsPageFilters from "../ProductsPageFilters/ProductsPageFilters";
import ProductsPageBatteryCategory from "../ProductsPageBatteryCategory/ProductsPageBatteryCategory";
import ProductsPageCardsSection from "../ProductsPageCardsSection/ProductsPageCardsSection";

function ProductsPage() {
  return (
    <section className="w-full max-lg:px-4 mx-auto max-w-[101.5625rem] flex justify-center gap-6 pt-12 pb-24">
      <ProductsPageFilters />
      <div className="h-screen w-full flex-grow pt-6">
        <ProductsPageBatteryCategory />
        <ProductsPageCardsSection />
      </div>
    </section>
  );
}

export default ProductsPage;
