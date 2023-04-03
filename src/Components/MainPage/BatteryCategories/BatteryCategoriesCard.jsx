import React from "react";
import stage from "../../../assets/images/data/battery-categories/stage.png";

function BatteryCategoriesCard({data}) {
  return (
    <figure className="flex-center flex-col cursor-pointer">
      <img className="mb-2 max-h-[5.75rem] object-contain" src={data.image} alt={data.text} />
      <img className="mb-3" src={stage} alt="stage for batteries" />
      <figcaption className="text-NeutralN300 text-base">{data.text}</figcaption>
    </figure>
  );
}

export default BatteryCategoriesCard;
