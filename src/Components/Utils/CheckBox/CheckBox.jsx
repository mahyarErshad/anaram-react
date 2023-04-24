import React from "react";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";

const CheckBox = ({ label, counter }) => (
  <div className="flex w-full justify-start items-start gap-2 py-4">
    <input id={label} className="cursor-pointer mt-[0.125rem]" type="checkbox" />
    <label className="text-sm text-NeutralN500 font-semibold cursor-pointer flex gap-1" htmlFor={label}>
      <span>{label}</span>
      <span>({separateNumberByThousand(counter)})</span>
    </label>
  </div>
);

export default CheckBox;
