import React from "react";
import flashLight from "../../../assets/images/data/other-products/light.png";
import charger from "../../../assets/images/data/other-products/charger.png";
import powerBank from "../../../assets/images/data/other-products/power-bank.png";
import otherProductsImage from "../../../assets/images/data/other-products/other-products.png";

const data = [flashLight, charger, powerBank, otherProductsImage];

function OtherProducts() {
  return (
    <section className="container mt-24 gap-8">
      <h2 className="text-xl font-bold text-NeutralN500">
        محصولات دیگر <strong className="text-xl font-bold text-primary6">آنارام</strong>
      </h2>
      <div className="grid grid-cols-2 gap-y-4 justify-items-center max-w-[82.5rem] mx-auto lg:grid-cols-4 max-lg:max-w-[42.5rem] max-lg:grid-cols-2">
        {data.map((image, index) => (
          <img key={index} src={image} alt="products category" />
        ))}
      </div>
    </section>
  );
}

export default OtherProducts;
