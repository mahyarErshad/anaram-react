import React from "react";
import { ReactComponent as PlusIcon } from "../../../../assets/images/icons/increase-singleProduct-icon.svg";
import { ReactComponent as MinusIcon } from "../../../../assets/images/icons/decrease-singleProduct-icon.svg";
import styles from "./style.module.css";

function SingleProductIncreaseDecreaseButton({ state, setState }) {
  return (
    <div className="py-3 px-6 bg-NeutralN10 flex-center gap-9 w-fit rounded-lg max-w-[15rem]">
      <span className="text-sm text-NeutralN100 font-semibold">تعداد</span>
      <div className="flex-center">
        <button disabled={state === 10} onClick={() => setState((prev) => prev + 1)} className={`h-full flex-center p-2 bg-NeutralN20 rounded-[0.25rem] ${styles.button}`}>
          <PlusIcon className="stroke-NeutralN300 duration-300" />
        </button>
        <span className="text-base font-bold text-NeutralN500 px-4 min-w-[3rem] flex-center">{state}</span>
        <button disabled={state === 1} onClick={() => setState((prev) => prev - 1)} className={`h-full flex-center p-2 bg-NeutralN20 rounded-[0.25rem] ${styles.button}`}>
          <MinusIcon className="stroke-NeutralN300 duration-300" />
        </button>
      </div>
    </div>
  );
}

export default SingleProductIncreaseDecreaseButton;
