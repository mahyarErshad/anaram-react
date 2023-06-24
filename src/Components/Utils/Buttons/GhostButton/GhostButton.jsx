import React from "react";

function GhostButton({ text, className }) {
  return <button className={`flex-center rounded-md bg-transparent border py-[0.625rem] w-[8rem] text-sm duration-150 ${className}`}>{text}</button>;
}

export default GhostButton;
