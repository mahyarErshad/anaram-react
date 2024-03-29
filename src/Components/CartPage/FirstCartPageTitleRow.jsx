import React from "react";
import { ReactComponent as BagIcon } from "../../assets/images/icons/bag-icon.svg";
import { ReactComponent as Dots } from "../../assets/images/icons/3dots.svg";

function FirstCartPageTitleRow({ counter, setModalOpen }) {
  return (
    <div className="flex justify-between items-center border-b border-NeutralN30 pb-3">
      <div className="flex items-center">
        <span className="flex-center rounded-5px p-3 bg-NeutralN10">
          <BagIcon stroke="#575757" />
        </span>
        <span className="text-base text-NeutralN500 mr-2">سبد خرید</span>
        {counter > 0 && <span className="mr-1 font-semibold text-xs flex-center bg-primary6 text-white rounded-full w-6 h-6">{counter}</span>}
      </div>
      {counter > 0 && (
        <button onClick={() => setModalOpen(true)} className="bg-NeutralN10 rounded-5px flex-center">
          <Dots />
        </button>
      )}
    </div>
  );
}

export default FirstCartPageTitleRow;
