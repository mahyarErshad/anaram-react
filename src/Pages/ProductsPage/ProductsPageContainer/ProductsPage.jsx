import React from "react";
import ProductsPageFilters from "../ProductsPageFilters/ProductsPageFilters";
import ProductsPageBatteryCategory from "../ProductsPageBatteryCategory/ProductsPageBatteryCategory";
import ProductsPageCardsSection from "../ProductsPageCardsSection/ProductsPageCardsSection";
import styles from "./layout.module.css";

function ProductsPage() {
  return (
    <section className={`w-full h-full max-w-[103.5625rem] px-4 pt-12 pb-24 mx-auto ${styles.container}`}>
      <ProductsPageFilters />
      <div className="w-full pt-6 overflow-x-hidden">
        <ProductsPageBatteryCategory />
        <ProductsPageCardsSection />
      </div>
    </section>
  );
}

export default ProductsPage;
