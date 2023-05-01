import React from "react";
import ProductsPageFilters from "../ProductsPageFilters/ProductsPageFilters";
import ProductsPageBatteryCategory from "../ProductsPageBatteryCategory/ProductsPageBatteryCategory";
import ProductsPageCardsSection from "../ProductsPageCardsSection/ProductsPageCardsSection";
import styles from "./layout.module.css";
import BatteryChargingComponent from "../../../Components/BatteryChargingComponent/BatteryChargingComponent";

function ProductsPage() {
  return (
    <section className={`w-full max-w-[103.5625rem] px-4 lg:pt-12 pb-24 mx-auto ${styles.container}`}>
      <ProductsPageFilters />
      <div className="w-full pt-6 overflow-x-hidden">
        <ProductsPageBatteryCategory />
        <ProductsPageCardsSection />
      </div>
      <BatteryChargingComponent />
    </section>
  );
}

export default ProductsPage;
