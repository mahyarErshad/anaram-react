import React from "react";
import stage from "../../../assets/images/data/other-products/stage.png";

function OtherProductsCards({ data }) {
  return (
    <figure className={`flex flex-col relative overflow-y-visible pr-4 pt-4 gap-2 rounded-2xl bg-gradient-to-br ${data.gradient}`}>
      <img className="absolute object-contain left-[6.6875rem] top-[-6.5625rem]" src={data.image} alt={data.text} />
      <figcaption className="self-start text-2xl font-bold">{data.text}</figcaption>
      <img className="self-end mr-16 -translate-x-6" src={stage} alt="Stage for showing the products" />
    </figure>
  );
}

export default OtherProductsCards;
