import React from "react";
import styles from "../../style/productCard.module.css"

function ProductCardTimeCounter({number , text}) {
  return (
    <div className={`${styles.counter} flex flex-col justify-between items-center h-full w-1/4 border-r border-NeutralN30`}>
      <span className="text-xs font-semibold text-Magenta">{number}</span>
      <span className="text-[0.5rem] text-NeutralN50 transition-all duration-300">{text}</span>
    </div>
  );
}

export default ProductCardTimeCounter;
