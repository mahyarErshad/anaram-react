import React from "react";

function SmallButton({icon, className}) {
  return (
    <button className={`${className} flex-center bg-NeutralN10 rounded-5px`}>
      {icon}
    </button>
  ); 
}

export default SmallButton;
