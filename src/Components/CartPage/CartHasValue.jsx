import React from "react";
import FirstCartPageTitleRow from "./FirstCartPageTitleRow";
import CardsOfCart from "./CardsOfCart";
import ActionSectionQuantity from "../../Pages/SingleProduct/SingleProductDetailSection/ActionSectionQuantity";
import PrimaryButton from "../Utils/Buttons/PrimaryButton/PrimaryButton";

function CartHasValue() {
  return (
    <>
      <div className="flex-col flex-grow">
        <FirstCartPageTitleRow counter={data.length} />
        {data.map((_, index) => (
          <CardsOfCart onClick={() => handleClick(index)} key={index} />
        ))}
      </div>
      <div className="pt-10 pb-6 px-6 flex-col bg-NeutralN10 border border-NeutralN20 rounded-2xl min-w-[24.375rem]">
        <ActionSectionQuantity className="pb-8 border-b border-NeutralN30" title="تعداد محصولات :" quantity="3" counter />
        <ActionSectionQuantity className="border-b border-NeutralN30 pt-8 pb-4" title="قیمت نهایی محصولات :" quantity={620000} toman />
        <p className="text-NeutralN100 text-center text-xs pb-6 mb-6 border-b border-NeutralN30">مبلغ نهایی سفارش شامل مالیات بر ارزش افزوده است.</p>
        <button className="bg-transparent p-0 mb-8 self-start text-primary6 text-xs hover:text-primary8 duration-300">کد تخفیف دارم</button>
        <PrimaryButton text="ادامه" />
      </div>
    </>
  );
}

export default CartHasValue;
