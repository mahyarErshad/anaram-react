import React from "react";
import CartHasValue from "../../Components/CartPage/CartHasValue";

function CartPage() {
  return (
    <section className="flex items-start max-w-[82.5rem] w-full mx-auto rounded-2xl p-6 bg-white mt-16 mb-72 gap-14">
      <CartHasValue />
    </section>
  );
}

export default CartPage;
