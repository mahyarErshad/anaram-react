import React from "react";
import flashLight from "../../../assets/images/data/other-products/light.png";
import charger from "../../../assets/images/data/other-products/charger.png";
import powerBank from "../../../assets/images/data/other-products/power-bank.png";
import otherProductsImage from "../../../assets/images/data/other-products/other-products.png";

function OtherProducts() {
  const data = [flashLight, charger, powerBank, otherProductsImage];
  return (
    <section className="container mt-24 gap-8">
      <h2 className="text-xl font-bold text-NeutralN500">
        محصولات دیگر <strong className="text-xl font-bold text-primary6">آنارام</strong>
      </h2>
      <div className="w-full lg:max-w-[82.5rem] max-lg:max-w-[42.5rem] grid lg:grid-cols-4 max-lg:grid-cols-2 justify-items-center max-lg:gap-y-4">
        {data.map((data, index) => {
          return <img src={data} alt="products category" key={index} />;
        })}
      </div>
    </section>
  );
}

export default OtherProducts;
