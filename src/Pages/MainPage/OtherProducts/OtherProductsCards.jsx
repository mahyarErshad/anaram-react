import React from "react";

function OtherProductsCards({ data }) {
  return (
    <figure className={`flex flex-col relative overflow-y-visible pr-4 pt-4 pb-2 gap-2 rounded-2xl bg-gradient-to-br ${data.gradient}`}>
      <figcaption className="self-start text-2xl font-bold">{data.text}</figcaption>
      <img className="self-end mr-16 mt-[-8.5rem] w-[70%]" src={data.image} alt={data.text} />
    </figure>
  );
}

export default OtherProductsCards;
