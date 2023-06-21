import React, { useCallback, useState } from "react";
import FirstCartPageTitleRow from "../../Components/CartPage/FirstCartPageTitleRow";
import CardsOfCart from "../../Components/CartPage/CardsOfCart";
import ActionSectionQuantity from "../SingleProduct/SingleProductDetailSection/ActionSectionQuantity";

function CartPage() {
  const [data, setData] = useState([1, 2, 3]);

  const handleClick = useCallback((index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  }, []);

  return (
    <section className="flex items-start max-w-[82.5rem] w-full mx-auto rounded-2xl p-6 bg-white mt-16 mb-72 gap-14">
      <div className="flex-col flex-grow">
        <FirstCartPageTitleRow counter={data.length} />
        {data.map((_, index) => (
          <CardsOfCart onClick={() => handleClick(index)} key={index} />
        ))}
      </div>
      <div className="pt-10 pb-6 px-6 flex-col bg-NeutralN10 border border-NeutralN20 rounded-2xl min-w-[24.375rem]">
        <ActionSectionQuantity className="pb-8 border-b border-NeutralN30" title="تعداد محصولات :" quantity="3" counter />
      </div>
    </section>
  );
}

export default CartPage;
