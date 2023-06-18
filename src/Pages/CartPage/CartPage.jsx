import React from "react";
import FirstCartPageTitleRow from "../../Components/CartPage/FirstCartPageTitleRow";

function CartPage() {
  return (
    <section className="container bg-white rounded-2xl flex-row p-6 mt-16 mb-72">
      <div className="flex-col w-full">
        <FirstCartPageTitleRow />
      </div>
      <div></div>
    </section>
  );
}

export default CartPage;
