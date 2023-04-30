import React, { useState } from "react";
import ProductPageModal from "../../../ProductPageModal/ProductPageModal";
import ModalFilters from "../../../ProductPageModal/ModalFilters";
import { ReactComponent as SettingsIcon } from "../../../../assets/images/icons/settings-icon.svg";

function ProductPageFilterButton({ className, icon, text }) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const handleOpen = () => {
    setMobileFilterOpen(true);
  };
  return (
    <>
      <button onClick={handleOpen} className={`${className} p-2 flex justify-start items-center gap-3 bg-white border border-NeutralN20 rounded-lg lg:hidden max-sm:flex-grow`}>
        {icon}
        <span className="text-xs font-semibold text-NeutralN500 sm:ml-24 whitespace-nowrap">{text}</span>
      </button>
      <ProductPageModal icon={<SettingsIcon className="rotate-90 w-10 h-10 md " />} title="فیلتر ها" element={<ModalFilters />} open={mobileFilterOpen} setOpen={setMobileFilterOpen} />
    </>
  );
}

export default ProductPageFilterButton;
