import React from "react";
import stage from "../../../assets/images/data/battery-categories/stage.png";

function BatteryCategoriesCard(props) {
  return (
    <figure className="flex flex-col">
      <img className="mb-2" src={props.image} alt={props.text} />
      <img className="mb-3" src={stage} alt="stage for batteries" />
      <figcaption className="text-NeutralN300 text-base">{props.text}</figcaption>
    </figure>
  );
}

export default BatteryCategoriesCard;
