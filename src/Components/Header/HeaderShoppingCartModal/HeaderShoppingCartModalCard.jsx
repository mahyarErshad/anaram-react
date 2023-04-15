import React from "react";

function HeaderShoppingCartModalCard(props) {
  return (
    <figure className="flex py-5 pr-3 pl-6 border-y border-NeutralN20 w-[21.875rem]">
      <img className="w-[6.6875rem]" src={props.image} alt={props.title} />
      <div className="flex flex-col gap-5">
        <figcaption className="text-xs leading-5 font-semibold">{props.title}</figcaption>
      </div>
    </figure>
  );
}

export default HeaderShoppingCartModalCard;
