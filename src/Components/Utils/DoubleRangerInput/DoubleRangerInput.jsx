import React, { useState } from "react";
import { ReactComponent as TomanIcon } from "../../../assets/images/icons/toman-icon-black.svg";
import ReactSlider from "react-slider";
import styles from "./styles.module.css";

function DoubleRangerInput() {
  const [values, setValues] = useState([0, 100000]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  const handleInputChange = (event, index) => {
    const newValues = [...values];
    newValues[index] = event.target.valueAsNumber;
    setValues(newValues);
  };

  const handleMinBlur = () => {
    if (values[0] > values[1]) {
      setValues([values[1], values[1]]);
    }
  };

  return (
    <div className="flex-col w-full gap-6 mb-6">
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs font-semibold text-NeutralN500">از</span>
        <div className="text-xs font-semibold text-NeutralN500 flex-center flex-grow gap-2">
          <input onBlur={handleMinBlur} dir="ltr" type="number" className="text-base text-NeutralN500 w-full pt-1 focus-within:outline-none" value={values[0]} min={0} max={values[1]} step={1000} onChange={(event) => handleInputChange(event, 0)} />
          <TomanIcon className="w-4 h-3" />
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs font-semibold text-NeutralN500">تا</span>
        <div className="text-xs font-semibold text-NeutralN500 flex-center flex-grow gap-2">
          <input dir="ltr" type="number" className="text-base text-NeutralN500 w-full pt-1 focus-within:outline-none" value={values[1]} min={values[0]} max={100000} step={1000} onChange={(event) => handleInputChange(event, 1)} />
          <TomanIcon className="w-4 h-3" />
        </div>
      </div>
      <ReactSlider className={styles.slider} thumbClassName={styles.thumb} trackClassName={styles.track} value={values} onChange={handleChange} min={0} max={100000} ariaLabel={["Lower thumb", "Upper thumb"]} pearling minDistance={1000} />
    </div>
  );
}

export default DoubleRangerInput;
