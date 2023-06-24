import React, { useCallback, useState } from "react";
import CartHasValue from "../../Components/CartPage/CartHasValue";

function CartPage() {
  const [data, setData] = useState([1, 2, 3]);

  const handleClick = useCallback((index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  }, []);
  return (
    <section className="flex items-start max-w-[82.5rem] w-full mx-auto rounded-2xl p-6 bg-white mt-16 mb-72 gap-14">
      <CartHasValue state={data} setState={setData} />
    </section>
  );
}

export default CartPage;
