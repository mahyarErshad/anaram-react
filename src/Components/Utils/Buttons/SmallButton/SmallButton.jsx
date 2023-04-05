import React from "react";
import { ReactComponent as Icon } from "../../../../assets/images/icons/bag-icon.svg";

function SmallButton() {
  return (
    <button className="flex-center w-12 h-12 bg-NeutralN10 rounded-5px">
      <Icon stroke="#575757" />
    </button>
  );
}

export default SmallButton;
