import React from "react";
import { ReactComponent as Icon } from "../../../../assets/images/bag-icon.svg";

function CartButton() {
  return (
    <button className="flex-center">
      <Icon />
    </button>
  );
}

export default CartButton;
