import React from "react";

function ProductCardTimeCounter({number , text}) {
  return (
    <div className="flex flex-col justify-between items-center h-full w-1/4 border-r border-NeutralN30">
      <span className="text-xs font-semibold text-Magenta">{number}</span>
      <span className="text-[0.5rem] text-NeutralN50">{text}</span>
    </div>
  );
}

export default ProductCardTimeCounter;
