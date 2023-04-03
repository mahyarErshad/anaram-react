import React from "react";
import BatteryCategoriesCard from "./BatteryCategoriesCard";
import BatteryCategoriesData from "../../../lib/BatteryCategories/BatteryCategoriesData";

function BatteryCategories() {
  return (
    <section className="w-full px-4 mt-16 flex-center flex-col gap-6">
      <h2 className="text-xl font-bold text-NeutralN500">
        انواع باتری <strong className="text-xl font-bold text-primary6">وارتا</strong>
      </h2>
      <div className="flex-center pt-8 pb-6 max-w-[82.5rem] bg-NeutralN10 border border-NeutralN30 rounded-2xl px-1 max-lg:flex-wrap">
      {
        BatteryCategoriesData.map((data,index)=>{
            return <BatteryCategoriesCard key={index} data={data} />
        })
      }
      </div>
    </section>
  );
}

export default BatteryCategories;
