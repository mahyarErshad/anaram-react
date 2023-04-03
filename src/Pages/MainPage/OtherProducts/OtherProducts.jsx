import React from "react";
import OtherProductsCards from "./OtherProductsCards";

function OtherProducts() {
  return (
    <section className="w-full px-4 mt-16 flex-center flex-col gap-14">
      <h2 className="text-xl font-bold text-NeutralN500">
        محصولات دیگر<strong className="text-xl font-bold text-primary6">آنارام</strong>
      </h2>
      <OtherProductsCards />
    </section>
  );
}

export default OtherProducts;
