import React from "react";

function SmallButton({icon}) {
  return (
    <button className="flex-center w-12 h-12 bg-NeutralN10 rounded-5px">
      {icon}
    </button>
  ); 
}

export default SmallButton;
