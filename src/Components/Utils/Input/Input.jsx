import React from "react";

function Input() {
  return (
    <div className="flex-col gap-2">
      <label className="text-NeutralN500 text-xs font-semibold">نام</label>
      <input placeholder="محمد" className="p-4 text-sm placeholder:text-NeutralN70 bg-white rounded-lg border border-NeutralN30 focus:border-primary2 outline-none duration-300" />
    </div>
  );
}

export default Input;
