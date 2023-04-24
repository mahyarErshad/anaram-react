import React from "react";

function CheckBox({ label, counter }) {
  return (
    <div className="flex w-full justify-start items-start gap-2">
      <input id={label} className="cursor-pointer" type="checkbox" />
      <label className="text-xs text-primary8 font-semibold cursor-pointer" htmlFor={label}>
        {label}({counter})
      </label>
    </div>
  );
}

export default CheckBox;
