import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/close-icon.svg";
import { ReactComponent as DeleteCartIcon } from "../../assets/images/icons/delete-cart-red-bin.svg";

function CartModal({ setModalOpen }) {
  return (
    <div className="flex-col flex-center bg-white rounded-2xl w-full max-w-[40.625rem] px-4 pt-4 pb-11">
      <button className="self-end mb-2" onClick={() => setModalOpen(false)}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default CartModal;
