import React from "react";
import stage from "../../../assets/images/data/battery-categories/stage.png";

const ProductsPageBatteryCategory = (props) => {
  const { image, text, active } = props;
  const activeStyles = active ? "bg-primary1 border-primary2" : "bg-NeutralN20 border-white";
  return (
    <figure className={`group flex-center flex-col border cursor-pointer max-lg:mt-6 w-[12rem] py-4 rounded-2xl ${activeStyles}`}>
      <img className="mb-2 group-hover:-translate-y-1 max-h-[5.75rem] object-contain transition-all duration-300" src={image} alt={text} />
      <img className="mb-3" src={stage} alt="stage for batteries" />
      <figcaption className="text-NeutralN300 text-base">{text}</figcaption>
    </figure>
  );
};

export default ProductsPageBatteryCategory;
