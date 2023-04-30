import React from "react";

function ProductPageFilterButton({ className, icon, text, setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <button onClick={handleOpen} className={`${className} p-2 flex justify-start items-center gap-3 bg-white border border-NeutralN20 rounded-lg lg:hidden max-sm:flex-grow`}>
      {icon}
      <span className="text-xs font-semibold text-NeutralN500 sm:ml-24 whitespace-nowrap">{text}</span>
    </button>
  );
}

export default ProductPageFilterButton;
