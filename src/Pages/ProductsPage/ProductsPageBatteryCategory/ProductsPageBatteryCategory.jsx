import React from "react";
import stage from "../../../assets/images/data/battery-categories/stage.png";

const ProductsPageBatteryCategory = ({ data }) => {
  const { image, text } = data;
  return (
    <figure className="group flex-center flex-col cursor-pointer max-lg:mt-6">
      <img className="mb-2 group-hover:-translate-y-1 max-h-[5.75rem] object-contain transition-all duration-300" src={image} alt={text} />
      <img className="mb-3" src={stage} alt="stage for batteries" />
      <figcaption className="text-NeutralN300 text-base">{text}</figcaption>
    </figure>
  );
};

export default ProductsPageBatteryCategory;
