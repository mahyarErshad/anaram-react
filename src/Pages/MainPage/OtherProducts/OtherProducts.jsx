import React from "react";
import OtherProductsData from "../../../lib/OtherProducts/OtherProductsData";

function OtherProducts() {
  return (
    <section className="container mt-24 gap-32">
      <h2 className="text-xl font-bold text-NeutralN500">
        محصولات دیگر <strong className="text-xl font-bold text-primary6">آنارام</strong>
      </h2>
      <div className="w-full max-w-[82.5rem] grid lg:grid-cols-4 max-lg:grid-cols-2 lg:gap-6 max-lg:gap-3">
        {OtherProductsData.map((data, index) => {
          return <OtherProductsCards key={index} data={data} />;
        })}
      </div>
    </section>
  );
}

export default OtherProducts;
