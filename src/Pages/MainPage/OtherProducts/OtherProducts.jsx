import React from "react";
import OtherProductsCards from "./OtherProductsCards";
import OtherProductsData from "../../../lib/OtherProducts/OtherProductsData";

function OtherProducts() {
  return (
    <section className="w-full px-4 mt-16 flex-center flex-col gap-14">
      <h2 className="text-xl font-bold text-NeutralN500">
        محصولات دیگر <strong className="text-xl font-bold text-primary6">آنارام</strong>
      </h2>
      <div className="w-full flex-center max-lg:flex-wrap">
        {OtherProductsData.map((data, index) => {
          return <OtherProductsCards key={index} data={data} />;
        })}
      </div>
    </section>
  );
}

export default OtherProducts;
