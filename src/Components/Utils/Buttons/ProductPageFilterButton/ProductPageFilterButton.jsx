import React from "react";

function ProductPageFilterButton({ className, icon, text }) {
  return (
    <button className={`${className} p-2 flex justify-start items-center gap-3 bg-white border border-NeutralN20`}>
      {icon}
      <span className="text-xs font-semibold text-NeutralN500">{text}</span>
    </button>
  );
}

export default ProductPageFilterButton;
