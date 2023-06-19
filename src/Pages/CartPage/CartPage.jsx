import React, { useState } from "react";
import FirstCartPageTitleRow from "../../Components/CartPage/FirstCartPageTitleRow";
import CardsOfCart from "../../Components/CartPage/CardsOfCart";

function CartPage() {
  const [data, setData] = useState([1, 2, 3]);

  function handleClick(index) {
    setData(data.filter((_, i) => i !== index));
  }

  return (
    <section className="container bg-white rounded-2xl flex-row p-6 mt-16 mb-72">
      <div className="flex-col w-full">
        <FirstCartPageTitleRow counter={data.length} />
        {data.map((_, index) => (
          <CardsOfCart onClick={() => handleClick(index)} key={index} />
        ))}
      </div>
      <div></div>
    </section>
  );
}

export default CartPage;
