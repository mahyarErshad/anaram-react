import React, { useState } from "react";
import { ReactComponent as TomanIcon } from "../../../assets/images/icons/toman-icon-black.svg";
import ReactSlider from "react-slider";

function DoubleRangerInput() {
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(1234567);
  return (
    <div className="flex flex-col w-full gap-6 mb-6">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-NeutralN500">از</span>
        <div className="text-xs font-semibold text-NeutralN500 flex-center gap-3">
          <input onChange={(e) => setMinimum(e.target.value)} dir="ltr" type="number" className="text-base text-NeutralN500 pt-1 focus-within:outline-none" min={0} step={1000} value={minimum} />
          <TomanIcon className="w-4 h-3" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-NeutralN500">تا</span>
        <div className="text-xs font-semibold text-NeutralN500 flex-center gap-3">
          <input onChange={(e) => setMaximum(e.target.value)} dir="ltr" type="number" className="text-base text-NeutralN500 pt-1 focus-within:outline-none" min={0} step={1000} value={maximum} />
          <TomanIcon className="w-4 h-3" />
        </div>
      </div>
      <ReactSlider className="horizontal-slider" thumbClassName="example-thumb" trackClassName="example-track" defaultValue={[0, 100]} ariaLabel={["Lower thumb", "Upper thumb"]} ariaValuetext={(state) => `Thumb value ${state.valueNow}`} renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>} pearling minDistance={10} />
    </div>
  );
}

export default DoubleRangerInput;
