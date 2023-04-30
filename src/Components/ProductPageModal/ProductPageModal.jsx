import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/close-icon.svg";

function ProductPageModal({ icon, title, element }) {
  return (
    <section className="fixed w-screen h-screen top-0 right-0 left-0 bottom-0 p-7 bg-white lg:hidden z-50">
      <div className="w-full h-full p-4 border border-NeutralN20 rounded-5px flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <div className="flex-center gap-3">
            {icon}
            <span className="max-md:text-xs md:text-base font-semibold text-NeutralN500">{title}</span>
          </div>
          <button className="p-2">
            <CloseIcon className="md:w-10 md:h-10" />
          </button>
        </div>
        {element}
      </div>
    </section>
  );
}

export default ProductPageModal;
