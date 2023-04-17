import React from "react";

const SmallButton = ({ icon, className, onClick }) => (
  <button onClick={onClick} className={`flex-center rounded-5px ${className}`}>
    {icon}
  </button>
);

export default SmallButton;
