import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/close-icon.svg";
import { ReactComponent as DeleteCartIcon } from "../../assets/images/icons/delete-cart-red-bin.svg";
import GhostButton from "../Utils/Buttons/GhostButton/GhostButton";

function CartModal({ setModalOpen, setData }) {
  function clearCart() {
    setData([]);
    setModalOpen(false);
  }
  return (
    <div className="flex-col flex-center bg-white rounded-2xl w-full max-w-[40.625rem] px-4 pt-4 pb-11">
      <button className="self-end mb-2" onClick={() => setModalOpen(false)}>
        <CloseIcon />
      </button>
      <div className="flex gap-2 mb-14">
        <DeleteCartIcon className="col-start-1 col-span-2" />
        <div className="flex-col gap-2">
          <p className="text-black text-lg font-semibold">آیا از حذف کل سبد خرید اطمینان دارید ؟</p>
          <p className="text-[#717171] text-sm">پس از حذف دیگر امکان بازگشت محصولات به سبد خرید وجود ندارد.</p>
        </div>
      </div>
      <div className="flex-center w-full gap-2">
        <GhostButton onClick={() => setModalOpen(false)} className="border-transparent hover:border-primary2" text="انصراف" />
        <GhostButton onClick={clearCart} className="border-Red text-Red hover:text-Red6 hover:border-Red6" text="حذف" />
      </div>
    </div>
  );
}

export default CartModal;
