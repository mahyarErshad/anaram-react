import React from "react";

function OtherProductsCards({ data }) {
  return (
    <figure className={`flex flex-col relative overflow-visible px-4 pt-4 rounded-2xl bg-gradient-to-br ${data.gradient}`}>
      <figcaption className="self-start text-2xl font-bold">{data.text}</figcaption>
      <img className="self-end" src={data.image} alt={data.text} />
    </figure>
  );
}

export default OtherProductsCards;
