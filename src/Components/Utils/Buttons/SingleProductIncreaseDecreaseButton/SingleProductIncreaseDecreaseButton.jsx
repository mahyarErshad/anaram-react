import React from "react";
import { ReactComponent as PlusIcon } from "../../../../assets/images/icons/increase-singleProduct-icon.svg";

function SingleProductIncreaseDecreaseButton() {
  return (
    <div className="py-3 px-6 bg-NeutralN10 flex-center gap-9 w-fit rounded-lg">
      <span className="text-sm text-NeutralN100 font-semibold">تعداد</span>
      <div className="flex-center">
        <button className="h-full flex-center p-2">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}

export default SingleProductIncreaseDecreaseButton;
