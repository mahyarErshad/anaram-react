import React from "react";

function SmallButton({ icon, className, onClick }) {
  return (
    <button onClick={onClick} className={`${className} flex-center rounded-5px`}>
      {icon}
    </button>
  );
}

export default SmallButton;
