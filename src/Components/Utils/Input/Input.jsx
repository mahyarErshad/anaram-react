import React from "react";

function Input({ label, className, placeholder }) {
  return (
    <div className="flex-col gap-2 w-full">
      <label htmlFor={label} className="text-NeutralN500 text-xs font-semibold cursor-pointer">
        {label}
      </label>
      <input id={label} placeholder={placeholder || label} className={`p-4 text-sm placeholder:text-NeutralN70 bg-white rounded-lg border border-NeutralN30 focus:border-primary2 outline-none duration-300 ${className}`} />
    </div>
  );
}

export default Input;
