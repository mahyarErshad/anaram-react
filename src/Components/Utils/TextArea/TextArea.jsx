import React from "react";

function TextArea({ label, className, placeholder }) {
  return (
    <div className="flex-col gap-2 w-full">
      <label htmlFor={label} className="text-NeutralN500 text-xs font-semibold cursor-pointer">
        {label}
      </label>
      <textarea id={label} placeholder={placeholder || label} className={`p-4 resize-none text-sm placeholder:text-NeutralN70 bg-white rounded-lg border border-NeutralN30 focus:border-primary2 outline-none duration-300 ${className}`} />
    </div>
  );
}

export default TextArea;
