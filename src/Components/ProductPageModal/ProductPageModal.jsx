import React from "react";

function ProductPageModal({ icon, title }) {
  return (
    <section className="fixed w-screen h-screen top-0 right-0 left-0 bottom-0 p-7 bg-white lg:hidden z-50">
      <div className="w-full h-full p-4 border border-NeutralN20 rounded-5px flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex-center gap-3">
            {icon}
            <span className="text-xs font-semibold text-NeutralN500">{title}</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ProductPageModal;
