import React, { useState } from "react";
import FirstCartPageTitleRow from "./FirstCartPageTitleRow";
import CardsOfCart from "./CardsOfCart";
import ActionSectionQuantity from "../../Pages/SingleProduct/SingleProductDetailSection/ActionSectionQuantity";
import PrimaryButton from "../Utils/Buttons/PrimaryButton/PrimaryButton";

function CartHasValue({ data, handleClick, setModalOpen }) {
  const [coupon, setCoupon] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="flex-col flex-grow">
        <FirstCartPageTitleRow setModalOpen={setModalOpen} counter={data.length} />
        {data.map((_, index) => (
          <CardsOfCart onClick={() => handleClick(index)} key={index} />
        ))}
      </div>
      <div className="pt-10 pb-6 px-6 flex-col bg-NeutralN10 border border-NeutralN20 rounded-2xl min-w-[24.375rem] mr-14">
        <ActionSectionQuantity className="pb-8 border-b border-NeutralN30" title="تعداد محصولات :" quantity="3" counter />
        <ActionSectionQuantity className="border-b border-NeutralN30 pt-8 pb-4" title="قیمت نهایی محصولات :" quantity={620000} toman />
        <p className="text-NeutralN100 text-center text-xs pb-6 mb-6 border-b border-NeutralN30">مبلغ نهایی سفارش شامل مالیات بر ارزش افزوده است.</p>
        <button onClick={() => setCoupon((prev) => !prev)} className="bg-transparent p-0 self-start text-primary6 text-xs hover:text-primary8 duration-300">
          کد تخفیف دارم
        </button>
        {coupon && (
          <form onSubmit={(e) => handleSubmit(e)} className="w-full min-h-8 bg-white rounded-lg border border-NeutralN30 pr-2 py-1 pl-1 flex-center mt-4">
            <input className="border-none outline-none flex-grow h-full" />
          </form>
        )}
        <PrimaryButton className="mt-8" text="ادامه" />
      </div>
    </>
  );
}

export default CartHasValue;
