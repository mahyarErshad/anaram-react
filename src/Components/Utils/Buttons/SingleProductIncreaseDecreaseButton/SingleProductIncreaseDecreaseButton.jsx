import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../../../assets/images/icons/increase-singleProduct-icon.svg";
import { ReactComponent as MinusIcon } from "../../../../assets/images/icons/decrease-singleProduct-icon.svg";

function SingleProductIncreaseDecreaseButton() {
  const [state, setState] = useState(0);
  return (
    <div className="py-3 px-6 bg-NeutralN10 flex-center gap-9 w-fit rounded-lg max-w-[15rem]">
      <span className="text-sm text-NeutralN100 font-semibold">تعداد</span>
      <div className="flex-center">
        <button onClick={() => setState((prev) => prev + 1)} className="h-full flex-center p-2 bg-NeutralN20 rounded-[0.25rem]">
          <PlusIcon />
        </button>
        <span className="text-base font-bold text-NeutralN500 px-4 min-w-[3rem] flex-center">{state}</span>
        <button disabled={state === 0} onClick={() => setState((prev) => prev - 1)} className="h-full flex-center p-2 bg-NeutralN20 rounded-[0.25rem]">
          <MinusIcon />
        </button>
      </div>
    </div>
  );
}

export default SingleProductIncreaseDecreaseButton;
