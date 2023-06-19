import React from "react";
import FirstCartPageTitleRow from "../../Components/CartPage/FirstCartPageTitleRow";
import CardsOfCart from "../../Components/CartPage/CardsOfCart";

function CartPage() {
  return (
    <section className="container bg-white rounded-2xl flex-row p-6 mt-16 mb-72">
      <div className="flex-col w-full">
        <FirstCartPageTitleRow />
        <CardsOfCart />
      </div>
      <div></div>
    </section>
  );
}

export default CartPage;
