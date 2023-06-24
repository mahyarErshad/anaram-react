import React from "react";
import { ReactComponent as DeleteCartIcon } from "../../assets/images/icons/delete-cart-red-bin.svg";
import GhostButton from "../Utils/Buttons/GhostButton/GhostButton";

function CartModal({ setModalOpen, setData }) {
  function clearCart() {
    setData([]);
    setModalOpen(false);
  }
  return (
    <>
      <div className="flex gap-2 mb-14">
        <DeleteCartIcon className="col-start-1 col-span-2" />
        <div className="flex-col gap-2">
          <p className="text-black text-lg font-semibold">آیا از حذف کل سبد خرید اطمینان دارید ؟</p>
          <p className="text-[#717171] text-sm">پس از حذف دیگر امکان بازگشت محصولات به سبد خرید وجود ندارد.</p>
        </div>
      </div>
      <div className="flex-center w-full gap-2">
        <GhostButton onClick={() => setModalOpen(false)} className="border-transparent hover:border-NeutralN500" text="انصراف" />
        <GhostButton onClick={clearCart} className="border-Red text-Red hover:text-Red6 hover:border-Red6" text="حذف" />
      </div>
    </>
  );
}

export default CartModal;
