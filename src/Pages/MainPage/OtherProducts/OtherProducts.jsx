import React from "react";
import OtherProductsCards from "./OtherProductsCards";
import OtherProductsData from "../../../lib/OtherProducts/OtherProductsData";

function OtherProducts() {
  return (
    <section className="container mt-24 gap-32">
      <h2 className="text-xl font-bold text-NeutralN500">
        محصولات دیگر <strong className="text-xl font-bold text-primary6">آنارام</strong>
      </h2>
      <div className="w-full max-w-[82.5rem] flex-center max-lg:flex-wrap gap-6">
        {OtherProductsData.map((data, index) => {
          return <OtherProductsCards key={index} data={data} />;
        })}
      </div>
    </section>
  );
}

export default OtherProducts;
