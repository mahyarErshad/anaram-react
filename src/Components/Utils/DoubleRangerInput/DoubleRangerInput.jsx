import React, { useState } from "react";
import { ReactComponent as TomanIcon } from "../../../assets/images/icons/toman-icon-black.svg";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";

function DoubleRangerInput() {
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(1234567);
  return (
    <div className="flex flex-col w-full gap-6 mb-6">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-NeutralN500">از</span>
        <div className="text-xs font-semibold text-NeutralN500 flex-center gap-3">
          <input onChange={(e) => setMinimum(e.target.value)} dir="ltr" type="text" className="text-base text-NeutralN500 pt-1 focus-within:outline-none" value={separateNumberByThousand(minimum)} />
          <TomanIcon className="w-4 h-3" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-NeutralN500">تا</span>
        <div className="text-xs font-semibold text-NeutralN500 flex-center gap-3">
          <input onChange={(e) => setMaximum(e.target.value)} dir="ltr" type="text" className="text-base text-NeutralN500 pt-1 focus-within:outline-none" value={separateNumberByThousand(maximum)} />
          <TomanIcon className="w-4 h-3" />
        </div>
      </div>
    </div>
  );
}

export default DoubleRangerInput;
