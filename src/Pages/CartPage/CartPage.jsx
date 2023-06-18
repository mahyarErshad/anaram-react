import React from "react";
import { ReactComponent as BagIcon } from "../../assets/images/icons/bag-icon.svg";
import { ReactComponent as Dots } from "../../assets/images/icons/3dots.svg";

function CartPage() {
  return (
    <section className="container bg-white rounded-2xl flex-row p-6 mt-16 mb-72">
      <div className="flex-col w-full">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <span className="flex-center rounded-5px p-3 bg-NeutralN10">
              <BagIcon stroke="#575757" />
            </span>
            <span className="text-base text-NeutralN500 mr-2">سبد خرید</span>
            <span className="mr-1 font-semibold text-xs flex-center bg-primary6 text-white rounded-full w-6 h-6">3</span>
          </div>
          <button className="bg-NeutralN10 rounded-5px flex-center">
            <Dots />
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default CartPage;
