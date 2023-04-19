import React from "react";
import BatteryCategoriesCard from "./BatteryCategoriesCard";
import BatteryCategoriesData from "../../../lib/BatteryCategories/BatteryCategoriesData";

const BatteryCategories = () => {
  return (
    <section className="container mt-16 gap-6">
      <h2 className="text-xl font-bold text-NeutralN500">
        انواع باتری <strong className="text-xl font-bold text-primary6">وارتا</strong>
      </h2>
      <div className="grid max-md:grid-cols-3 md:grid-cols-6 pt-8 pb-6 max-w-[82.5rem] bg-NeutralN10 border border-NeutralN30 rounded-2xl px-1">
        {BatteryCategoriesData.map((data, index) => (
          <BatteryCategoriesCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default BatteryCategories;
