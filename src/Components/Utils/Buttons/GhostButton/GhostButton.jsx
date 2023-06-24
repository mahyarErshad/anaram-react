import React from "react";

function GhostButton({ text, className, onClick }) {
  return (
    <button onClick={onClick} className={`flex-center rounded-md bg-transparent border py-[0.625rem] w-[8rem] text-sm duration-150 ${className}`}>
      {text}
    </button>
  );
}

export default GhostButton;
